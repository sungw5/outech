///////////////// VARIABLES ////////////////////
const body = document.querySelector("body");
const yellowBar = document.querySelector(".yellow-bar");
const chmer = document.querySelector(".chmer");

const titlePic = document.querySelector(".titlepic");
const titleText = document.querySelector(".titlepic .text");

function titleChange() {
  titlePic.style = "background-size: 100vw";
  titleText.style = "letter-spacing: 6px";
}

//---------- Scroll Events ------------///
function headerChange() {
  if (this.scrollY > 75) {
    body.style = "background: #fff";
    chmer.style =
      "border-right: 1px solid #e7e4e4; border-left: 1px solid #e7e4e4;";
  } else {
    body.style = "background: rgb(29, 27, 28)";
    chmer.style =
      "border-left: 1px solid rgb(29, 27, 28); border-right: 1px solid rgb(29, 27, 28);";
  }
}

function barChange() {
  if (this.scrollY > 70) {
    yellowBar.style = "width: 250px";
  } else {
    yellowBar.style = "width: 0";
  }
}

////////////////// Wirecut //////////////////
// 0 - G
// 1 - GX
// 2 - Q
// 3 - RV
// 4 - RX
const category = document.querySelectorAll(".wirecut .category ul li");

// grids - wirecut
const gSeries = document.querySelector(".wirecut .g-series");
const gxSeries = document.querySelector(".wirecut .gx-series");
const qSeries = document.querySelector(".wirecut .q-series");
const rvSeries = document.querySelector(".wirecut .rv-series");
const rxSeries = document.querySelector(".wirecut .rx-series");

const SHOWING_CLASS = "showing"; // showing grids
const ACTIVE_CLASS = "active"; // active category

function pickCategory(e) {
  let activeSeries = document.querySelector(`.${ACTIVE_CLASS}`);
  let currentGrid = document.querySelector(`.${SHOWING_CLASS}`);
  activeSeries.classList.remove(ACTIVE_CLASS);
  currentGrid.classList.remove(SHOWING_CLASS);

  if (e.currentTarget === category[0]) {
    category[0].classList.add(ACTIVE_CLASS);
    gSeries.classList.add(SHOWING_CLASS);
  }
  if (e.currentTarget === category[1]) {
    category[1].classList.add(ACTIVE_CLASS);
    gxSeries.classList.add(SHOWING_CLASS);
  }
  if (e.currentTarget === category[2]) {
    category[2].classList.add(ACTIVE_CLASS);
    qSeries.classList.add(SHOWING_CLASS);
  }
  if (e.currentTarget === category[3]) {
    category[3].classList.add(ACTIVE_CLASS);
    rvSeries.classList.add(SHOWING_CLASS);
  }
  if (e.currentTarget === category[4]) {
    category[4].classList.add(ACTIVE_CLASS);
    rxSeries.classList.add(SHOWING_CLASS);
  }
}

///////////////// MAIN ////////////////////
function init() {
  // scroll events
  window.addEventListener("scroll", headerChange, false);
  window.addEventListener("scroll", barChange, false);
  window.addEventListener("load", titleChange, false);

  // category events
  for (let i = 0; i < category.length; i++) {
    category[i].addEventListener("click", pickCategory);
  }
}

init();
