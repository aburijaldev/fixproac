/* ==========================================
   FIXPRO AC PREMIUM SCRIPT
========================================== */

document.addEventListener("DOMContentLoaded", () => {
  /* ==========================================
     MOBILE MENU
  ========================================== */

  const menuToggle = document.querySelector(".menu-toggle");
  const navMenu = document.querySelector(".nav-menu");

  if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", () => {
      navMenu.classList.toggle("active");

      menuToggle.classList.toggle("active");
    });

    document.querySelectorAll(".nav-menu a").forEach((link) => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("active");
      });
    });
  }

  /* ==========================================
     DARK MODE
  ========================================== */

  const body = document.body;

  const themeToggle = document.getElementById("themeToggle");

  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "dark") {
    body.classList.add("dark-mode");

    if (themeToggle) {
      themeToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
    }
  }

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      body.classList.toggle("dark-mode");

      const isDark = body.classList.contains("dark-mode");

      localStorage.setItem("theme", isDark ? "dark" : "light");

      themeToggle.innerHTML = isDark
        ? '<i class="fa-solid fa-sun"></i>'
        : '<i class="fa-solid fa-moon"></i>';
    });
  }

  /* ==========================================
     FAQ ACCORDION
  ========================================== */

  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach((item) => {
    const question = item.querySelector(".faq-question");

    question.addEventListener("click", () => {
      faqItems.forEach((faq) => {
        if (faq !== item) {
          faq.classList.remove("active");
        }
      });

      item.classList.toggle("active");
    });
  });

  /* ==========================================
     COUNTER ANIMATION
  ========================================== */

  const counters = document.querySelectorAll(".counter");

  const runCounter = (counter) => {
    const target = parseInt(counter.dataset.target);

    const duration = 2000;

    const step = target / (duration / 16);

    let current = 0;

    const update = () => {
      current += step;

      if (current < target) {
        counter.textContent = Math.floor(current);

        requestAnimationFrame(update);
      } else {
        counter.textContent = target.toLocaleString() + "+";
      }
    };

    update();
  };

  const counterObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          runCounter(entry.target);

          counterObserver.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.5,
    },
  );

  counters.forEach((counter) => {
    counterObserver.observe(counter);
  });

  /* ==========================================
     TESTIMONIAL AUTO SLIDER
  ========================================== */

  const track = document.querySelector(".testimonial-track");

  if (track) {
    let position = 0;

    const slideCards = track.children.length;

    const cardWidth = 375;

    function autoSlide() {
      position++;

      if (position >= slideCards) {
        position = 0;
      }

      track.style.transition = "transform .7s ease";

      track.style.transform = `translateX(-${position * cardWidth}px)`;
    }

    setInterval(autoSlide, 4000);
  }

  /* ==========================================
     FORM WHATSAPP
  ========================================== */

  const waForm = document.getElementById("waForm");

  if (waForm) {
    waForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const nama = document.getElementById("nama").value;

      const layanan = document.getElementById("layananSelect").value;

      const keluhan = document.getElementById("keluhan").value;

      const pesan = `Halo FixPro AC,

Nama : ${nama}
Layanan : ${layanan}

Keluhan :
${keluhan}

Mohon informasi lebih lanjut.`;

      const url = `https://wa.me/6281234567890?text=${encodeURIComponent(pesan)}`;

      window.open(url, "_blank");
    });
  }

  /* ==========================================
     BACK TO TOP
  ========================================== */

  const backToTop = document.getElementById("backToTop");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
      backToTop.classList.add("show");
    } else {
      backToTop.classList.remove("show");
    }
  });

  if (backToTop) {
    backToTop.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  }

  /* ==========================================
     NAVBAR SCROLL EFFECT
  ========================================== */

  const navbar = document.querySelector(".navbar");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 80) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  /* ==========================================
     SCROLL PROGRESS BAR
  ========================================== */

  const progressBar = document.querySelector(".scroll-progress");

  window.addEventListener("scroll", () => {
    const scrollTop = document.documentElement.scrollTop;

    const scrollHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    const progress = (scrollTop / scrollHeight) * 100;

    if (progressBar) {
      progressBar.style.width = progress + "%";
    }
  });

  /* ==========================================
     FADE-UP ANIMATION
  ========================================== */

  const revealElements = document.querySelectorAll(".fade-up");

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    },
    {
      threshold: 0.2,
    },
  );

  revealElements.forEach((el) => {
    revealObserver.observe(el);
  });

  /* ==========================================
     GALLERY LIGHT EFFECT
  ========================================== */

  const galleryImages = document.querySelectorAll(".gallery-item img");

  galleryImages.forEach((img) => {
    img.addEventListener("mouseenter", () => {
      img.style.filter = "brightness(1.05)";
    });

    img.addEventListener("mouseleave", () => {
      img.style.filter = "brightness(1)";
    });
  });

  /* ==========================================
     PARALLAX HERO
  ========================================== */

  const heroImage = document.querySelector(".hero-image");

  window.addEventListener("scroll", () => {
    if (heroImage) {
      const scrollY = window.scrollY;

      heroImage.style.transform = `translateY(${scrollY * 0.08}px)`;
    }
  });
});

/* ==========================================
   PRELOADER SUPPORT
========================================== */

window.addEventListener("load", () => {
  const preloader = document.querySelector(".preloader");

  if (preloader) {
    preloader.style.opacity = "0";

    setTimeout(() => {
      preloader.style.display = "none";
    }, 500);
  }
});
/* ==========================================
   LIGHT BOX
========================================== */
const lightbox = document.querySelector(".lightbox");

const lightboxImg = document.querySelector(".lightbox-img");

document.querySelectorAll(".gallery-item img").forEach((img) => {
  img.addEventListener("click", () => {
    lightbox.classList.add("show");

    lightboxImg.src = img.src;
  });
});

document.querySelector(".close-lightbox").addEventListener("click", () => {
  lightbox.classList.remove("show");
});
/* ==========================================
   SWIPER
========================================== */
new Swiper(".testimonialSwiper", {
  loop: true,

  spaceBetween: 30,

  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  breakpoints: {
    0: { slidesPerView: 1 },
    768: {
      slidesPerView: 2,
    },

    1024: {
      slidesPerView: 3,
    },
  },
});
