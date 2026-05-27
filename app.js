// =========================
// NAVBAR SCROLL EFFECT
// =========================

const navbar =
  document.getElementById("navbar");

window.addEventListener("scroll", () => {

  if (navbar) {

    navbar.classList.toggle(
      "scrolled",
      window.scrollY > 40
    );

  }

});

// =========================
// SCROLL REVEAL ANIMATION
// =========================

const revealElements =
  document.querySelectorAll(".reveal");

const revealObserver =
  new IntersectionObserver(

    (entries) => {

      entries.forEach((entry) => {

        if (entry.isIntersecting) {

          entry.target.classList.add("show");

        }

      });

    },

    {
      threshold: 0.15
    }

);

revealElements.forEach((element) => {

  revealObserver.observe(element);

});

// =========================
// CONTACT FORM AJAX
// =========================

const form =
  document.getElementById("contact-form");

const successMessage =
  document.getElementById("success-message");

if (successMessage) {

  successMessage.style.display = "none";

}

if (form) {

  form.addEventListener(

    "submit",

    async (e) => {

      e.preventDefault();

      const formData =
        new FormData(form);

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

          // RESET FORM

          form.reset();

          // HIDE FORM

          form.style.display = "none";

          // SHOW SUCCESS MESSAGE

          if (successMessage) {

            successMessage.style.display = "block";

            successMessage.scrollIntoView({
              behavior: "smooth"
            });

          }

          // OPTIONAL:
          // redirect after 2 seconds

          setTimeout(() => {

            window.location.href =
              "success.html";

          }, 2000);

        } else {

          alert(
            "Something went wrong. Please try again."
          );

        }

      } catch (error) {

        alert(
          "Network error. Please try again."
        );

      }

    }

  );

}

// =========================
// PHOTO MODAL
// =========================

const modal =
  document.getElementById("imageModal");

const modalImg =
  document.getElementById("modalImg");

const galleryImages =
  document.querySelectorAll(".gallery-img");

const closeBtn =
  document.querySelector(".close");

if (
  modal &&
  modalImg &&
  galleryImages.length > 0
) {

  galleryImages.forEach((img) => {

    img.addEventListener("click", () => {

      modal.classList.add("active");

      modalImg.src = img.src;

      document.body.classList.add(
        "modal-open"
      );

    });

  });

}

if (closeBtn && modal) {

  closeBtn.addEventListener("click", () => {

    modal.classList.remove("active");

    document.body.classList.remove(
      "modal-open"
    );

  });

}

if (modal) {

  modal.addEventListener("click", (e) => {

    if (e.target === modal) {

      modal.classList.remove("active");

      document.body.classList.remove(
        "modal-open"
      );

    }

  });

}

// =========================
// ESC KEY CLOSE MODAL
// =========================

document.addEventListener(
  "keydown",

  (e) => {

    if (
      e.key === "Escape" &&
      modal &&
      modal.classList.contains("active")
    ) {

      modal.classList.remove("active");

      document.body.classList.remove(
        "modal-open"
      );

    }

  }

);
