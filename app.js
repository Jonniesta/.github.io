// =========================
// GLOBAL ANIMATION ENGINE
// =========================

// =========================
// NAV SCROLL EFFECT
// =========================
let lastScroll = 0;

window.addEventListener("scroll", () => {
  const nav = document.querySelector("nav");
  const currentScroll = window.scrollY;

  if (!nav) return;

  // glassmorphism deepen on scroll
  nav.classList.toggle("scrolled", currentScroll > 20);

  lastScroll = currentScroll;
});


// =========================
// SCROLL REVEAL SYSTEM
// =========================
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // MATCHES YOUR CSS (.reveal.active)
        entry.target.classList.add("active");
      }
    });
  },
  {
    threshold: 0.12,
  }
);

document.querySelectorAll(".reveal").forEach((el) => {
  revealObserver.observe(el);
});


// =========================
// IMAGE MODAL (GLOBAL)
// =========================
window.openModal = function (src) {
  const modal = document.getElementById("modal");
  const modalImg = document.getElementById("modalImg");

  if (!modal || !modalImg) return;

  modalImg.src = src;
  modal.classList.add("active");

  // lock scroll
  document.body.style.overflow = "hidden";
};

window.closeModal = function () {
  const modal = document.getElementById("modal");

  if (!modal) return;

  modal.classList.remove("active");

  // unlock scroll
  document.body.style.overflow = "auto";
};


// close modal on ESC key
window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    window.closeModal();
  }
});


// =========================
// PAGE FADE-IN SYSTEM
// =========================
window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});
