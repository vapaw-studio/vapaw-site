const videos = document.querySelectorAll(".hero-video");
const dots = document.querySelectorAll(".dot");
const prev = document.querySelector(".hero-arrow.left");
const next = document.querySelector(".hero-arrow.right");
let current = 0;

function showSlide(index) {
  videos[current].classList.remove("active");
  dots[current].classList.remove("active");

  current = (index + videos.length) % videos.length;

  videos[current].classList.add("active");
  dots[current].classList.add("active");
}

prev.addEventListener("click", () => showSlide(current - 1));
next.addEventListener("click", () => showSlide(current + 1));

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => showSlide(index));
});

setInterval(() => showSlide(current + 1), 6500);

const revealItems = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.18 }
);

revealItems.forEach(item => observer.observe(item));
