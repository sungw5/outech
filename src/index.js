////////////////////////////////////////////////////////////////////
///////////////////////// GLOBAL VARIABLES /////////////////////////
////////////////////////////////////////////////////////////////////
// 5 slides (0~4)
const slides = document.querySelectorAll(".visuals .main-slide > div");

const prevBtn = document.querySelector(".visuals .main-slide .prev");
const nextBtn = document.querySelector(".visuals .main-slide .next");

// 5 slide circles (0~4)
const slideCircles = document.querySelectorAll(".visuals .main-slide ul li");

const SHOWING_CLASS = "showing";
const ENABLE_CIRCLE = "circle-showing";

////////////////////////////////////////////////////////////////////
//////////////////////////// FUNCTIONS /////////////////////////////
////////////////////////////////////////////////////////////////////
function prevCircle() {
  let currentCircle = document.querySelector(`.${ENABLE_CIRCLE}`);
  currentCircle.classList.remove(ENABLE_CIRCLE);
  let prevCircle = currentCircle.previousElementSibling;
  if (prevCircle) prevCircle.classList.add(ENABLE_CIRCLE);
  else slideCircles[4].classList.add(ENABLE_CIRCLE);
}
function nextCircle() {
  let currentCircle = document.querySelector(`.${ENABLE_CIRCLE}`);
  currentCircle.classList.remove(ENABLE_CIRCLE);
  let nextCircle = currentCircle.nextElementSibling;
  if (nextCircle) nextCircle.classList.add(ENABLE_CIRCLE);
  else slideCircles[0].classList.add(ENABLE_CIRCLE);
}

function pickSlide(e) {
  let currentSlide = document.querySelector(`.${SHOWING_CLASS}`);
  let currentCicle = document.querySelector(`.${ENABLE_CIRCLE}`);
  currentCicle.classList.remove(ENABLE_CIRCLE);
  e.currentTarget.classList.add(ENABLE_CIRCLE);

  if (e.currentTarget === slideCircles[0]) {
    currentSlide.classList.remove(SHOWING_CLASS);
    slides[0].classList.add(SHOWING_CLASS);
  }
  if (e.currentTarget === slideCircles[1]) {
    currentSlide.classList.remove(SHOWING_CLASS);
    slides[1].classList.add(SHOWING_CLASS);
  }
  if (e.currentTarget === slideCircles[2]) {
    currentSlide.classList.remove(SHOWING_CLASS);
    slides[2].classList.add(SHOWING_CLASS);
  }
  if (e.currentTarget === slideCircles[3]) {
    currentSlide.classList.remove(SHOWING_CLASS);
    slides[3].classList.add(SHOWING_CLASS);
  }
  if (e.currentTarget === slideCircles[4]) {
    currentSlide.classList.remove(SHOWING_CLASS);
    slides[4].classList.add(SHOWING_CLASS);
  }
}

function mainSlide() {
  let currentSlide = document.querySelector(`.${SHOWING_CLASS}`);
  let currentCircle = document.querySelector(`.${ENABLE_CIRCLE}`);
  if (currentSlide && currentCircle) {
    currentSlide.classList.remove(SHOWING_CLASS);
    currentCircle.classList.remove(ENABLE_CIRCLE);

    let nextSlide = currentSlide.nextElementSibling;
    let nextCircle = currentCircle.nextElementSibling;

    if (nextSlide.nodeName == "DIV" && nextCircle) {
      nextSlide.classList.add(SHOWING_CLASS);
      nextCircle.classList.add(ENABLE_CIRCLE);
    } else {
      slides[0].classList.add(SHOWING_CLASS);
      slideCircles[0].classList.add(ENABLE_CIRCLE);
    }
  } else {
    slides[0].classList.add(SHOWING_CLASS);
    slideCircles[0].classList.add(ENABLE_CIRCLE);
  }
}
// Auto slide start
let slideInterval = setInterval(mainSlide, 6000);

function prev() {
  let currentSlide = document.querySelector(`.${SHOWING_CLASS}`);
  currentSlide.classList.remove(SHOWING_CLASS);
  let prevSlide = currentSlide.previousElementSibling;
  prevCircle();

  if (prevSlide && prevSlide.nodeName == "DIV")
    prevSlide.classList.add(SHOWING_CLASS);
  else slides[4].classList.add(SHOWING_CLASS);
}

function next() {
  let currentSlide = document.querySelector(`.${SHOWING_CLASS}`);
  currentSlide.classList.remove(SHOWING_CLASS);
  let nextSlide = currentSlide.nextElementSibling;
  nextCircle();

  if (nextSlide && nextSlide.nodeName == "DIV")
    nextSlide.classList.add(SHOWING_CLASS);
  else slides[0].classList.add(SHOWING_CLASS);
}
////////////////////////////////////////////////////////////////////
/////////////////////////////// Main ///////////////////////////////
////////////////////////////////////////////////////////////////////
function init() {
  mainSlide();
  //   next, prev slide
  prevBtn.addEventListener("click", prev);
  nextBtn.addEventListener("click", next);
  // Pick slide by clicking circle
  for (let i = 0; i < slideCircles.length; i++) {
    slideCircles[i].addEventListener("click", pickSlide);
  }
}
init();
