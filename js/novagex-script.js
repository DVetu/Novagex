const LanguageManager = {
  CurrentLanguage: 'EN',

  Init() {
    // Priority 1: User's saved preference
    const savedLang = localStorage.getItem('language');
    if (savedLang && ['EN', 'FR'].includes(savedLang)) {
      this.CurrentLanguage = savedLang;
    } else {
      // Priority 2: Browser language
      const browserLang = navigator.language.split('-')[0].toUpperCase();
      const supportedLangs = ['EN', 'FR'];
      this.CurrentLanguage = supportedLangs.includes(browserLang) ? browserLang : 'EN';

      // Save detected preference
      localStorage.setItem('language', this.CurrentLanguage);
    }

    // Update UI on page load
    this.UpdateUI();
  },

  SwitchLanguage() {
    // Toggle language
    this.CurrentLanguage = (this.CurrentLanguage === 'FR') ? 'EN' : 'FR';

    // Persist choice
    localStorage.setItem('language', this.CurrentLanguage);

    // Update all UI text
    this.UpdateUI();
  },

  UpdateUI() {
    const items = document.querySelectorAll('.lang');
    const langData = (typeof window !== 'undefined' && window.translations) ? window.translations[this.CurrentLanguage] : undefined;

    if (!langData) {
      console.error(`Translations for language '${this.CurrentLanguage}' not found`);
      return;
    }

    items.forEach(item => {
      const key = item.id;
      if (langData[key]) {
        if (item.tagName === 'IMG') {
          item.src = langData[key];
        } else {
          item.textContent = langData[key];
        }
      } else {
        console.warn(`Missing translation for key: ${key}`);
      }
    });
  }
};

const Carousel = {
    currentIndex: 0,
    slides: [],
    dots: [],
    timer: null,
    interval: 2000,

    Init() {
        this.slides = Array.from(document.querySelectorAll('.carousel-slide'));
        if (this.slides.length === 0) return;

        const dotsContainer = document.querySelector('.carousel-dots');
        this.slides.forEach((_, i) => {
            const dot = document.createElement('button');
            dot.className = 'carousel-dot' + (i === 0 ? ' active' : '');
            dot.setAttribute('aria-label', `Slide ${i + 1}`);
            dot.addEventListener('click', () => this.goTo(i));
            dotsContainer.appendChild(dot);
        });
        this.dots = Array.from(document.querySelectorAll('.carousel-dot'));

        const carousel = document.querySelector('.carousel');
        carousel.addEventListener('mouseenter', () => this.pause());
        carousel.addEventListener('mouseleave', () => this.play());

        new IntersectionObserver(
            ([entry]) => entry.isIntersecting ? this.play() : this.pause(),
            { threshold: 0.1 }
        ).observe(carousel);

        const firstImg = this.slides[0];
        if (firstImg.complete) {
            this.updateTrackHeight();
        } else {
            firstImg.addEventListener('load', () => this.updateTrackHeight());
        }
        window.addEventListener('resize', () => this.updateTrackHeight());

        this.play();
    },

    updateTrackHeight() {
        const img = this.slides[this.currentIndex];
        if (img.naturalWidth === 0) return;
        const track = document.querySelector('.carousel-track');
        track.style.height = (track.offsetWidth * img.naturalHeight / img.naturalWidth) + 'px';
    },

    goTo(index) {
        this.slides[this.currentIndex].classList.remove('active');
        this.dots[this.currentIndex].classList.remove('active');
        this.currentIndex = (index + this.slides.length) % this.slides.length;
        this.slides[this.currentIndex].classList.add('active');
        this.dots[this.currentIndex].classList.add('active');
        this.updateTrackHeight();
    },

    next() { this.goTo(this.currentIndex + 1); },
    prev() { this.goTo(this.currentIndex - 1); },

    play() { clearInterval(this.timer); this.timer = setInterval(() => this.next(), this.interval); },
    pause() { clearInterval(this.timer); }
};

// Scroll animation observer
const observerOptions = {
  root: null,
  threshold: 0.15,
  rootMargin: '0px'
};

const animateOnScroll = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const element = entry.target;

      if (element.id === 'about') {
        element.style.animation = 'fadeInUp 0.8s ease-out forwards';
      } else if (element.id === 'projects') {
        element.style.animation = 'slideInLeft 0.8s ease-out forwards';
      } else if (element.id === 'contact') {
        element.style.animation = 'slideInRight 0.8s ease-out forwards';
      } else {
        element.style.animation = 'fadeInUp 0.8s ease-out forwards';
      }

      observer.unobserve(element);
    }
  });
};

// Initialize scroll animations
document.addEventListener('DOMContentLoaded', () => {
  Carousel.Init();

  const scrollObserver = new IntersectionObserver(animateOnScroll, observerOptions);

  const sections = document.querySelectorAll('.animate-on-scroll');
  sections.forEach(section => {
    section.style.opacity = '0';
    scrollObserver.observe(section);
  });

  const isTouchDevice = window.matchMedia('(hover: none) and (pointer: coarse)');
  document.querySelectorAll('.project-card[data-href]').forEach(card => {
    card.addEventListener('click', () => {
      if (isTouchDevice.matches) {
        window.location.href = card.dataset.href;
      }
    });
  });
});
