///////////////// VARIABLES ////////////////////
const body = document.querySelector("body");
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

///////////////// MAIN ////////////////////
function init() {
  window.addEventListener("load", titleChange, false);
  // scroll events
  //   window.addEventListener("scroll", headerChange, false);
  //   window.addEventListener("scroll", barChange, false);
}

init();
