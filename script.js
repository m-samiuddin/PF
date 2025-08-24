// Toggle mobile menu
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Typewriter effect
const texts = [
    "Freelance Web Developer",
    "STEM Educator",
    "Mentor",
    "Ph.D. Aspirant",
    "Computer Networks Enthusisast"
  ];
  
  let count = 0;      // which text
  let index = 0;      // letter index
  let isDeleting = false;
  
  function typeEffect() {
    const currentText = texts[count];
  
    // Update text
    document.getElementById("typing").textContent = currentText.substring(0, index);
  
    // Typing vs deleting
    if (!isDeleting) {
      if (index < currentText.length) {
        index++;
      } else {
        // word finished
        isDeleting = true;
      }
    } else {
      if (index > 0) {
        index--;
      } else {
        // move to next text
        isDeleting = false;
        count = (count + 1) % texts.length;
      }
    }
  
    // Speed settings
    let speed = isDeleting ? 100 : 150;
    if (!isDeleting && index === currentText.length) speed = 1000; // pause at full word
  
    setTimeout(typeEffect, speed);
  }
  
  document.addEventListener("DOMContentLoaded", typeEffect);
  
  
