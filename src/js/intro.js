///////////////// VARIABLES ////////////////////
const body = document.querySelector("body");
const titlePic = document.querySelector(".titlepic");
const titleText = document.querySelector(".titlepic .text");
///////////////// FUNCTIONS ////////////////////
function titleChange() {
  titlePic.style = "background-size: 100vw";
  titleText.style = "letter-spacing: 6px";
}

function headerChange() {
  if (this.scrollY > 75) {
    body.style = "background: #fff";
  } else {
    body.style = "background: rgb(29, 27, 28)";
  }
}

///////////////// MAIN ////////////////////
function init() {
  window.addEventListener("scroll", headerChange, false);
  window.addEventListener("load", titleChange, false);
}

init();
