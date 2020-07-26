///////////////// VARIABLES ////////////////////
const body = document.querySelector("body");
const yellowBar = document.querySelector(".yellow-bar");
const feeler = document.querySelector(".feeler");
const ffglogo = document.querySelector(".feeler .ffglogo");
const feelercircle = document.querySelector(".feeler .feelercircle");

const titlePic = document.querySelector(".titlepic");
const titleText = document.querySelector(".titlepic .text");

function titleChange() {
  titlePic.style = "background-size: 106vw";
  titleText.style = "letter-spacing: 6px";
}

//---------- Scroll Events ------------///
function headerChange() {
  if (this.scrollY > 35) {
    body.style = "background: #fff";
    feeler.style =
      "border-right: 1px solid #e7e4e4; border-left: 1px solid #e7e4e4;";
    ffglogo.style = "opacity: 1";
  } else {
    body.style = "background: rgb(29, 27, 28)";
    feeler.style =
      "border-left: 1px solid rgb(29, 27, 28); border-right: 1px solid rgb(29, 27, 28);";
    ffglogo.style = "opacity: .2";
  }
}

function barChange() {
  if (this.scrollY > 70) {
    yellowBar.style = "width: 450px";
  } else {
    yellowBar.style = "width: 0";
  }
}

function circleFade() {
  if (this.scrollY > 1500) {
    feelercircle.style = "opacity: 1";
  } else {
    feelercircle.style = "opacity: .2";
  }
}

////////////////// Wirecut //////////////////
// 0 - FTC
// 1 - FVP
// 2 - FMH
const category = document.querySelectorAll(".machine .category ul li");

// grids - machine
const ftcSeries = document.querySelector(".machine .ftc-series");
const fvpSeries = document.querySelector(".machine .fvp-series");
const fmhSeries = document.querySelector(".machine .fmh-series");

const SHOWING_CLASS = "showing"; // showing grids
const ACTIVE_CLASS = "active"; // active category

function pickCategory(e) {
  let activeSeries = document.querySelector(`.${ACTIVE_CLASS}`);
  let currentGrid = document.querySelector(`.${SHOWING_CLASS}`);
  activeSeries.classList.remove(ACTIVE_CLASS);
  currentGrid.classList.remove(SHOWING_CLASS);

  if (e.currentTarget === category[0]) {
    category[0].classList.add(ACTIVE_CLASS);
    ftcSeries.classList.add(SHOWING_CLASS);
  }
  if (e.currentTarget === category[1]) {
    category[1].classList.add(ACTIVE_CLASS);
    fvpSeries.classList.add(SHOWING_CLASS);
  }
  if (e.currentTarget === category[2]) {
    category[2].classList.add(ACTIVE_CLASS);
    fmhSeries.classList.add(SHOWING_CLASS);
  }
}

///////////////// MAIN ////////////////////
function init() {
  // scroll events
  window.addEventListener("scroll", headerChange, false);
  window.addEventListener("scroll", barChange, false);
  window.addEventListener("scroll", circleFade, false);
  window.addEventListener("load", titleChange, false);

  // category events
  for (let i = 0; i < category.length; i++) {
    category[i].addEventListener("click", pickCategory);
  }
}

init();
