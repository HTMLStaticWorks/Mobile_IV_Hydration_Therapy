/**
 * Main General Script
 */

document.addEventListener('DOMContentLoaded', () => {
  // Mobile Menu Toggle
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const navMenu = document.getElementById('nav-menu');
  const navActions = document.getElementById('nav-actions');

  if (mobileMenuBtn && navMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      navMenu.classList.toggle('active');
      
      if(navActions) {
         navMenu.appendChild(navActions); // Move actions into menu on mobile
      }
      
      const isExpanded = navMenu.classList.contains('active');
      mobileMenuBtn.innerHTML = isExpanded 
        ? `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>`
        : `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>`;
    });
  }

  // Navbar Scroll effect
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 20) {
        navbar.style.boxShadow = 'var(--shadow-sm)';
      } else {
        navbar.style.boxShadow = 'none';
      }
    });
  }

  // FAQ Accordion
  const faqHeaders = document.querySelectorAll('.faq-header');
  faqHeaders.forEach(header => {
    header.addEventListener('click', () => {
      const item = header.parentElement;
      const content = item.querySelector('.faq-content');
      const icon = header.querySelector('.faq-icon svg');
      
      const isOpen = content.style.maxHeight !== '0px' && content.style.maxHeight !== '';
      
      // Close all other items (optional, but usually cleaner)
      document.querySelectorAll('.faq-content').forEach(c => c.style.maxHeight = '0');
      document.querySelectorAll('.faq-icon svg').forEach(i => i.style.transform = 'rotate(0deg)');
      
      if (!isOpen) {
        content.style.maxHeight = content.scrollHeight + 'px';
        icon.style.transform = 'rotate(180deg)';
      } else {
        content.style.maxHeight = '0';
        icon.style.transform = 'rotate(0deg)';
      }
    });
  });

  // Mobile Dropdown Toggle
  const dropdowns = document.querySelectorAll('.dropdown');
  dropdowns.forEach(dropdown => {
    const toggle = dropdown.querySelector('a');
    if(toggle) {
      toggle.addEventListener('click', (e) => {
        if (window.innerWidth <= 1024) {
          e.preventDefault();
          dropdown.classList.toggle('active');
        }
      });
    }
  });
});
