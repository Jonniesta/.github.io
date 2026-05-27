// =========================
// NAVBAR SCROLL EFFECT
// =========================

const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {

  navbar.classList.toggle(
    "scrolled",
    window.scrollY > 40
  );

});

// =========================
// SCROLL REVEAL
// =========================

const revealElements =
  document.querySelectorAll(".reveal");

const revealObserver =
  new IntersectionObserver(

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

const form =
  document.getElementById("contact-form");

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

          form.reset();

          document.getElementById(
            "success-message"
          ).style.display = "block";

          form.style.display = "none";

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
