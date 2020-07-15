const body = document.querySelector("body");

function headerChange() {
  if (this.scrollY > 100) {
    body.style = "background: #fff";
  } else {
    body.style = "background: rgb(29, 27, 28)";
  }
}

function init() {
  window.addEventListener("scroll", headerChange, false);
}

init();
