const slides = document.querySelectorAll(".visuals .main-slide > div");

const SHOWING_CLASS = "showing";

function mainSlide() {
  let currentSlide = document.querySelector(`.${SHOWING_CLASS}`);

  if (currentSlide) {
    currentSlide.classList.remove(SHOWING_CLASS);

    let nextSlide = currentSlide.nextElementSibling;

    if (nextSlide.nodeName == "DIV") {
      nextSlide.classList.add(SHOWING_CLASS);
    } else {
      slides[0].classList.add(SHOWING_CLASS);
    }
  } else {
    slides[0].classList.add(SHOWING_CLASS);
  }
}

let slideInterval = setInterval(mainSlide, 6000);
////////////////////////////////////////////////////////////////////
/////////////////////////////// Main ///////////////////////////////
////////////////////////////////////////////////////////////////////
function init() {
  mainSlide();
}
init();
