document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Purchase Completed!");
});

// NAVBAR OR TOGGLE HAMBURGER MENU ON MOBILE
const hamburger = document.querySelector(".hamburger");
const navlinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navlinks.classList.toggle("active");
});

// SLIDESHOW
let slideIndex = 1;

showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("Slides_fade");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}

// AUTO SLIDESHOW
setInterval(() => plusSlides(1), 10000);
