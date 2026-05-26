//
// =========================
// JONNY PORTFOLIO ANIMATION ENGINE
// =========================
//

// =========================
// NAV SCROLL EFFECT
// =========================
window.addEventListener("scroll", () => {
  const nav = document.querySelector("nav");

  if (!nav) return;

  nav.classList.toggle("scrolled", window.scrollY > 20);
});


// =========================
// SCROLL REVEAL SYSTEM
// =========================
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
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
// STARFIELD BACKGROUND ENGINE
// =========================
const canvas = document.getElementById("stars");
const ctx = canvas ? canvas.getContext("2d") : null;

let stars = [];

function resizeCanvas() {
  if (!canvas) return;
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

window.addEventListener("resize", resizeCanvas);
resizeCanvas();

function createStars(count = 180) {
  if (!canvas) return;

  stars = [];

  for (let i = 0; i < count; i++) {
    stars.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 1.5,
      speed: Math.random() * 0.4 + 0.05,
      opacity: Math.random()
    });
  }
}

createStars();

function drawStars() {
  if (!ctx) return;

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (let star of stars) {
    ctx.beginPath();
    ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);

    ctx.fillStyle = `rgba(255,255,255,${star.opacity})`;
    ctx.fill();
  }

  moveStars();
}

function moveStars() {
  for (let star of stars) {
    star.y += star.speed;

    if (star.y > canvas.height) {
      star.y = 0;
      star.x = Math.random() * canvas.width;
    }
  }
}

function animate() {
  drawStars();
  requestAnimationFrame(animate);
}

animate();


// =========================
// OPTIONAL MODAL SYSTEM (SAFE)
// =========================
window.openModal = function (src) {
  const modal = document.getElementById("modal");
  const img = document.getElementById("modalImg");

  if (!modal || !img) return;

  img.src = src;
  modal.classList.add("active");

  document.body.style.overflow = "hidden";
};

window.closeModal = function () {
  const modal = document.getElementById("modal");

  if (!modal) return;

  modal.classList.remove("active");
  document.body.style.overflow = "auto";
};


// ESC KEY CLOSE MODAL
window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    window.closeModal();
  }
});
