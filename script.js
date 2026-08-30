// ==========================================================================
// 1. MOBILE MENU TOGGLE
// ==========================================================================
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

if (mobileMenuBtn) {
  mobileMenuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    mobileMenuBtn.classList.toggle('active');
  });
}

// Close mobile menu when a link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
    if (mobileMenuBtn) mobileMenuBtn.classList.remove('active');
  });
});

// ==========================================================================
// 2. SCROLL REVEAL ANIMATIONS
// ==========================================================================
// Select all sections and project cards to animate
const revealElements = document.querySelectorAll('section, .project-card, .job-card');

const revealOptions = {
  threshold: 0.15, // Trigger when 15% of the element is visible
  rootMargin: "0px 0px -50px 0px"
};

const revealOnScroll = new IntersectionObserver(function(entries, observer) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    
    entry.target.classList.add('revealed');
    observer.unobserve(entry.target); // Stop observing once revealed
  });
}, revealOptions);

revealElements.forEach(el => {
  el.classList.add('hidden-reveal'); // Add base hidden class via JS
  revealOnScroll.observe(el);
});

// ==========================================================================
// 3. ACTIVE NAVIGATION HIGHLIGHTING
// ==========================================================================
const sections = document.querySelectorAll('section');
const navItems = document.querySelectorAll('.nav-links a');

const highlightOptions = {
  threshold: 0.5 // Trigger when section is 50% visible
};

const highlightOnScroll = new IntersectionObserver(function(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      let currentId = entry.target.getAttribute('id');
      
      navItems.forEach(link => {
        link.classList.remove('current-section');
        if (link.getAttribute('href').includes(currentId)) {
          link.classList.add('current-section');
        }
      });
    }
  });
}, highlightOptions);

sections.forEach(section => {
  highlightOnScroll.observe(section);
});