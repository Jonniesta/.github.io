// =========================
// NAVBAR SCROLL EFFECT
// =========================

const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
  if (navbar) {
    navbar.classList.toggle("scrolled", window.scrollY > 40);
  }
});

// =========================
// MOBILE MENU
// =========================

const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

if (menuToggle && navMenu) {
  menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("show");

    menuToggle.textContent =
      navMenu.classList.contains("show") ? "✕" : "☰";
  });

  navMenu.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("show");
      menuToggle.textContent = "☰";
    });
  });
}

// =========================
// SCROLL REVEAL
// =========================

const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  {
    threshold: 0.15
  }
);

revealElements.forEach(element => {
  revealObserver.observe(element);
});

// =========================
// CONTACT FORM AJAX
// =========================

const form = document.getElementById("contact-form");
const successMessage = document.getElementById("success-message");

if (successMessage) {
  successMessage.style.display = "none";
}

if (form) {
  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = new FormData(form);

    try {
      const response = await fetch(
        "https://formspree.io/f/mbjpalvn",
        {
          method: "POST",
          body: formData,
          headers: {
            Accept: "application/json"
          }
        }
      );

      if (response.ok) {
        form.reset();
        form.style.display = "none";

        if (successMessage) {
          successMessage.style.display = "block";
        }

        setTimeout(() => {
          window.location.href = "success.html";
        }, 1500);

      } else {
        alert("Something went wrong. Please try again.");
      }

    } catch (error) {
      alert("Network error. Please try again.");
    }
  });
}

// =========================
// PHOTO MODAL
// =========================

const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImg");
const galleryImages = document.querySelectorAll(".gallery-img");
const closeBtn = document.querySelector(".close");

if (modal && modalImg && galleryImages.length > 0) {
  galleryImages.forEach(img => {
    img.addEventListener("click", () => {
      modal.classList.add("active");
      modalImg.src = img.src;
      document.body.classList.add("modal-open");
    });
  });
}

function closeModal() {
  if (modal) {
    modal.classList.remove("active");
    document.body.classList.remove("modal-open");
  }
}

if (closeBtn) {
  closeBtn.addEventListener("click", closeModal);
}

if (modal) {
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });
}

document.addEventListener("keydown", (e) => {
  if (
    e.key === "Escape" &&
    modal &&
    modal.classList.contains("active")
  ) {
    closeModal();
  }
});

const phonePopupBtn = document.getElementById("phone-popup-btn");
const phonePopup = document.getElementById("phone-popup");
const phonePopupClose = document.getElementById("phone-popup-close");

if (phonePopupBtn && phonePopup && phonePopupClose) {
  phonePopupBtn.addEventListener("click", () => {
    phonePopup.classList.add("show");
  });

  phonePopupClose.addEventListener("click", () => {
    phonePopup.classList.remove("show");
  });

  phonePopup.addEventListener("click", (e) => {
    if (e.target === phonePopup) {
      phonePopup.classList.remove("show");
    }
  });
}
