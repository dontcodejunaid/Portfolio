document.addEventListener('DOMContentLoaded', () => {
  // Theme Toggle Logic
  const themeToggle = document.getElementById('theme-toggle');
  const themeIcon = document.getElementById('theme-icon');
  const savedTheme = localStorage.getItem('theme') || 'dark';

  document.documentElement.setAttribute('data-theme', savedTheme);
  updateThemeIcon(savedTheme);

  themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
  });

  function updateThemeIcon(theme) {
    if (theme === 'light') {
      // Moon Icon
      themeIcon.innerHTML = `<path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>`;
    } else {
      // Sun Icon
      themeIcon.innerHTML = `<circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/>`;
    }
  }

  // Header Scroll Effect
  const header = document.getElementById('header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // Mobile Navigation Toggle
  const hamburger = document.getElementById('hamburger-menu');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
  });

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      navMenu.classList.remove('active');
    });
  });

  // Typewriter Animation
  const words = ["full-stack web apps.", "AI-powered tools.", "Flutter mobile apps.", "intelligent solutions."];
  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  const typewriterText = document.getElementById('typewriter-text');
  const typingSpeed = 100;
  const deletingSpeed = 50;
  const delayBetweenWords = 2000;

  function type() {
    const currentWord = words[wordIndex];
    if (isDeleting) {
      typewriterText.textContent = currentWord.substring(0, charIndex - 1);
      charIndex--;
    } else {
      typewriterText.textContent = currentWord.substring(0, charIndex + 1);
      charIndex++;
    }

    let speed = isDeleting ? deletingSpeed : typingSpeed;

    if (!isDeleting && charIndex === currentWord.length) {
      speed = delayBetweenWords;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      speed = 500;
    }

    setTimeout(type, speed);
  }

  if (typewriterText) {
    type();
  }

  // Active Navigation Tracking on Scroll
  const sections = document.querySelectorAll('section');
  const observerOptions = {
    root: null,
    rootMargin: '-20% 0px -60% 0px',
    threshold: 0
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach(section => observer.observe(section));

  // Project Filtering Logic
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Remove active from all
      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      const filter = button.getAttribute('data-filter');

      projectCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
          card.style.display = 'flex';
          // Micro-animation trigger
          card.style.opacity = '0';
          card.style.transform = 'translateY(10px)';
          setTimeout(() => {
            card.style.transition = 'var(--transition)';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 50);
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // Form Validation & Interaction
  const contactForm = document.getElementById('contact-form');
  const submitButton = document.getElementById('submit-button');
  const formStatus = document.getElementById('form-status');

  const fields = [
    { id: 'name', errorId: 'name-error', validate: val => val.trim().length > 0 },
    { id: 'email', errorId: 'email-error', validate: val => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val) },
    { id: 'subject', errorId: 'subject-error', validate: val => val.trim().length > 0 },
    { id: 'message', errorId: 'message-error', validate: val => val.trim().length > 0 }
  ];

  fields.forEach(field => {
    const input = document.getElementById(field.id);
    const errorEl = document.getElementById(field.errorId);

    // Validate on blur or input
    const validateField = () => {
      if (field.validate(input.value)) {
        errorEl.style.display = 'none';
        input.style.borderColor = 'var(--border-color)';
      } else {
        errorEl.style.display = 'block';
        input.style.borderColor = '#ff6b6b';
      }
    };

    input.addEventListener('blur', validateField);
    input.addEventListener('input', () => {
      if (errorEl.style.display === 'block') {
        validateField();
      }
    });
  });

  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let isValid = true;

    fields.forEach(field => {
      const input = document.getElementById(field.id);
      const errorEl = document.getElementById(field.errorId);

      if (!field.validate(input.value)) {
        isValid = false;
        errorEl.style.display = 'block';
        input.style.borderColor = '#ff6b6b';
      }
    });

    if (isValid) {
      submitButton.disabled = true;
      submitButton.textContent = 'Sending...';
      formStatus.style.display = 'none';

      // Simulate API send request
      setTimeout(() => {
        submitButton.disabled = false;
        submitButton.innerHTML = `Send Message <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polyline points="22 2 15 22 11 13 2 9 22 2"/></svg>`;
        formStatus.textContent = 'Thank you! Your message has been sent successfully.';
        formStatus.className = 'form-status success';
        formStatus.style.display = 'block';
        contactForm.reset();
      }, 1500);
    } else {
      formStatus.textContent = 'Please correct the errors in the form before submitting.';
      formStatus.className = 'form-status error';
      formStatus.style.display = 'block';
    }
  });
});
