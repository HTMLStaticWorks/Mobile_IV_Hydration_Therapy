/**
 * GSAP Animations setup
 * "GSAP + CSS only"
 * "Allowed: Smooth fade-up, Gentle hover effects, Section reveal"
 */

document.addEventListener("DOMContentLoaded", (event) => {
  // Check if GSAP is loaded
  if (typeof gsap === 'undefined') {
    console.warn("GSAP is not loaded. Animations disabled.");
    return;
  }

  // Register ScrollTrigger if available
  if(typeof ScrollTrigger !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
  }

  // Smooth fade-up elements
  const fadeUpElements = document.querySelectorAll('.fade-up');
  fadeUpElements.forEach((el) => {
    gsap.to(el, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power2.out",
      scrollTrigger: {
        trigger: el,
        start: "top 85%",
        toggleActions: "play none none reverse"
      }
    });
  });

  // Fade-in elements
  const fadeInElements = document.querySelectorAll('.fade-in');
  fadeInElements.forEach((el) => {
    gsap.to(el, {
      opacity: 1,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: el,
        start: "top 90%",
      }
    });
  });

  // Stagger items (e.g., service cards, list items)
  const staggerContainers = document.querySelectorAll('.stagger-container');
  staggerContainers.forEach((container) => {
    const items = container.querySelectorAll('.stagger-item');
    if(items.length > 0) {
      gsap.to(items, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: container,
          start: "top 85%",
        }
      });
    }
  });

  // Parallax-lite image reveals (Gentle section reveal)
  const imgReveals = document.querySelectorAll('.img-reveal');
  imgReveals.forEach((el) => {
    ScrollTrigger.create({
      trigger: el,
      start: "top 80%",
      onEnter: () => el.classList.add("is-revealed")
    });
  });
});
