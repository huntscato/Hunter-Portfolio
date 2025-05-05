document.addEventListener("DOMContentLoaded", function () {
  const dropdownButton = document.querySelector(".dropdown-button");
  const dropdownContent = document.querySelector(".dropdown-content");

  dropdownButton.addEventListener("click", function () {
    dropdownContent.classList.toggle("show");
  });
});

window.addEventListener('load', () => {
  // Fade in the body background
  document.body.style.opacity = '1';

  // Fade in the image inside .title-block
  const titleImg = document.querySelector('.title-block img');
  if (titleImg) {
    setTimeout(() => {
      titleImg.style.opacity = '1';
    }, 200); // Add a short delay if you want the bg to appear first
  }
});