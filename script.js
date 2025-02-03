let currentSlide = 0; // Start from the first slide

function openSlide(slideNumber) {
  const slides = document.querySelectorAll(".slide");
  const tabs = document.querySelectorAll(".tab");

  slides.forEach((slide, index) => {
    slide.classList.toggle("active", index === slideNumber);
  });

  tabs.forEach((tab, index) => {
    tab.classList.toggle("active", index === slideNumber);
  });

  currentSlide = slideNumber;
}

function prevSlide() {
  if (currentSlide > 0) {
    openSlide(currentSlide - 1);
  }
}

function nextSlide() {
  const totalSlides = document.querySelectorAll(".slide").length;
  if (currentSlide < totalSlides - 1) {
    openSlide(currentSlide + 1);
  }
}

function showSection(section) {
  document.querySelectorAll(".main-container").forEach((container) => {
    container.style.display = "none";
  });
  document.getElementById(`${section}-section`).style.display = "flex";
}

// Handle keyboard navigation
document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowRight") {
    nextSlide();
  } else if (event.key === "ArrowLeft") {
    prevSlide();
  }
});

// Initialize the first slide as active and show the main section
openSlide(0);
showSection("main");
