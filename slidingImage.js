let slideIndex = [1, 1, 1, 1, 1];
let totalSeasons = slideIndex.length;

for (let i = 0; i < totalSeasons; i++) {
  showSlides(slideIndex[i], i);
}

// Controles
function plusSlides(n, m) {
  showSlides((slideIndex[m] += n), m);
}

// Controles grandes
function currentSlide(n, m) {
  showSlides((slideIndex[m] = n), m);
}

function showSlides(n, m) {
  let i;
  let slides = document.getElementsByClassName(`slidingImages s${m + 1} fade`);
  let dots = document.getElementsByClassName(`dot s${m + 1}`);
  
  if (n > slides.length) {
    slideIndex[m] = 1;
  }
  if (n < 1) {
    slideIndex[m] = slides.length;
  }
  
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  
  for (i = 0; i < dots.length; i++) {
    dots[i].classList.remove("active");
  }
  
  slides[slideIndex[m] - 1].style.display = "block";
  dots[slideIndex[m] - 1].classList.add("active");
}

