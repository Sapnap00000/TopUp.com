// Form validation and friendly message
const form = document.getElementById("checkout-form");
const formMessage = document.getElementById("form-message");
if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const email = document.getElementById("email");
    const payment = document.getElementById("payment");
    if (!email.checkValidity()) {
      showFormMessage("Mohon masukkan email yang valid.", "error");
      email.focus();
      return;
    }
    if (!payment.value) {
      showFormMessage("Pilih metode pembayaran.", "error");
      payment.focus();
      return;
    }
    showFormMessage("Pembayaran berhasil. Terima kasih!", "success");
    form.reset();
  });
}

function showFormMessage(text, type) {
  if (!formMessage) return alert(text);
  formMessage.textContent = text;
  formMessage.className = type === "success" ? "msg-success" : "msg-error";
  setTimeout(() => {
    formMessage.textContent = "";
    formMessage.className = "";
  }, 4000);
}

// NAVBAR OR TOGGLE HAMBURGER MENU ON MOBILE (guard against missing elements)
const hamburger = document.querySelector(".hamburger");
const navlinks = document.querySelector(".nav-links");
if (hamburger && navlinks) {
  hamburger.addEventListener("click", () => {
    navlinks.classList.toggle("active");
  });
  hamburger.addEventListener("keypress", (e) => {
    if (e.key === "Enter" || e.key === " ") navlinks.classList.toggle("active");
  });
}

// SLIDESHOW (dynamic dots, keyboard nav, pause on hover)
let slideIndex = 0;
let slideInterval = null;

function initSlideshow() {
  const slides = document.querySelectorAll("#slideshow .Slides_fade");
  const dotsContainer = document.getElementById("dots-container");
  if (!slides.length) return;
  // create dots
  if (dotsContainer) {
    dotsContainer.innerHTML = "";
    slides.forEach((_, idx) => {
      const dot = document.createElement("span");
      dot.className = "dot";
      dot.setAttribute("data-index", idx);
      dot.addEventListener("click", () => currentSlide(idx));
      dotsContainer.appendChild(dot);
    });
  }
  showSlides(0);
  // auto
  slideInterval = setInterval(() => plusSlides(1), 10000);
  // pause on hover
  const slideshowEl = document.getElementById("slideshow");
  if (slideshowEl) {
    slideshowEl.addEventListener("mouseenter", () =>
      clearInterval(slideInterval)
    );
    slideshowEl.addEventListener("mouseleave", () => {
      clearInterval(slideInterval);
      slideInterval = setInterval(() => plusSlides(1), 10000);
    });
  }
  // keyboard
  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") plusSlides(-1);
    if (e.key === "ArrowRight") plusSlides(1);
  });
}

function plusSlides(n) {
  const slides = document.querySelectorAll("#slideshow .Slides_fade");
  showSlides((slideIndex + n + slides.length) % slides.length);
}

function currentSlide(n) {
  showSlides(n);
}

function showSlides(n) {
  const slides = document.querySelectorAll("#slideshow .Slides_fade");
  const dots = document.querySelectorAll("#dots-container .dot");
  if (!slides.length) return;
  slides.forEach((s) => (s.style.display = "none"));
  slideIndex = n;
  slides[slideIndex].style.display = "block";
  if (dots.length) {
    dots.forEach((d) => d.classList.remove("active"));
    const activeDot = dots[slideIndex];
    if (activeDot) activeDot.classList.add("active");
  }
}

// initialize on DOM ready
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initSlideshow);
} else {
  initSlideshow();
}
