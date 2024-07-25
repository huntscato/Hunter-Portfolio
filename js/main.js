document.addEventListener('DOMContentLoaded', function () {
    var headerH1 = document.getElementById('header-h1');
    var headerH2 = document.getElementById('header-h2');
  
    // Listen for the 'animationend' event on #header-h1
    headerH1.addEventListener('animationend', function () {
      // Once #header-h1 animation is complete, trigger #header-h2 animation
      headerH2.style.animation = 'fadeInAndSlide 1s ease-in-out forwards'; // Apply the animation
      headerH2.style.transition = 'opacity 1s ease-in-out'; // Add transition for a smooth fade effect
      headerH2.style.opacity = '1';
    });
  }); 