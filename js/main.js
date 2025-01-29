document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.nav-bar ul');
  
    toggleButton.addEventListener('click', () => {
      menu.classList.toggle('active');
    });
  });

  function fadeInOnScroll() {
    const elements = document.querySelectorAll('.fade-in');

    elements.forEach(element => {
      const elementTop = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (elementTop < windowHeight) {
        element.classList.add('visible');
      }
    })
  }

  window.addEventListener('scroll', fadeInOnScroll);