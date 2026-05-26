// =========================
// GLOBAL ANIMATION ENGINE
// =========================

// NAV SCROLL
window.addEventListener("scroll", () => {
  document.querySelector("nav")?.classList.toggle(
    "scrolled",
    window.scrollY > 20
  );
});

// FADE-IN ON SCROLL
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll(".reveal").forEach(el => {
  observer.observe(el);
});

// IMAGE MODAL (GLOBAL)
window.openModal = function (src) {
  const modal = document.getElementById("modal");
  const img = document.getElementById("modalImg");

  if (!modal || !img) return;

  img.src = src;
  modal.classList.add("active");
};

window.closeModal = function () {
  document.getElementById("modal")?.classList.remove("active");
};

// PAGE FADE IN
window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});
