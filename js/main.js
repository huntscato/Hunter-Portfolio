document.addEventListener('DOMContentLoaded', () => {
  const skills = document.querySelectorAll('.skill');
  
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // Stop observing the visible element
      }
    });
  }, { threshold: 0.1 });
  
  skills.forEach(skill => {
    observer.observe(skill);
  });
});