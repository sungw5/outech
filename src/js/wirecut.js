///////////////// VARIABLES ////////////////////
const body = document.querySelector("body");
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

///////////////// MAIN ////////////////////
function init() {
  // scroll events
  //   window.addEventListener("scroll", headerChange, false);
  //   window.addEventListener("scroll", barChange, false);
}

init();
