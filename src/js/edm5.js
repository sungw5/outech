///////////////// VARIABLES ////////////////////
const body = document.querySelector("body");
const yellowBar = document.querySelector(".yellow-bar");
const chmer = document.querySelector(".chmer");

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
// 0 - HE
// 1 - HM

const category = document.querySelectorAll(".wirecut .category ul li");

// grids - ds
const heSeries = document.querySelector(".hs .he-series");
const hmSeries = document.querySelector(".hs .hm-series");

const SHOWING_CLASS = "showing"; // showing grids
const ACTIVE_CLASS = "active"; // active category

function pickCategory(e) {
  let activeSeries = document.querySelector(`.${ACTIVE_CLASS}`);
  let currentGrid = document.querySelector(`.${SHOWING_CLASS}`);
  activeSeries.classList.remove(ACTIVE_CLASS);
  currentGrid.classList.remove(SHOWING_CLASS);

  if (e.currentTarget === category[0]) {
    category[0].classList.add(ACTIVE_CLASS);
    heSeries.classList.add(SHOWING_CLASS);
  }
  if (e.currentTarget === category[1]) {
    category[1].classList.add(ACTIVE_CLASS);
    hmSeries.classList.add(SHOWING_CLASS);
  }
}

///////////////// MAIN ////////////////////
function init() {
  // scroll events
  window.addEventListener("scroll", headerChange, false);
  window.addEventListener("scroll", barChange, false);

  // category events
  for (let i = 0; i < category.length; i++) {
    category[i].addEventListener("click", pickCategory);
  }
}

init();
