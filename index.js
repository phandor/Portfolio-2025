document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll('section');
  const navToggle = document.querySelector('.nav-toggle');
  const navItems = document.querySelectorAll('.nav-item a');
  const navMenu = document.querySelector('.nav-menu');
  
  navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });


      const text = "Aus Leidenschaft wird Beruf.";
      const typedText = document.getElementById('typed-text');
      let i = 0;

      function typeNextLetter() {
        if (i < text.length) {
          typedText.textContent += text.charAt(i);
          i++;
          setTimeout(typeNextLetter, 100);
        }
      }
      typeNextLetter();
    });

