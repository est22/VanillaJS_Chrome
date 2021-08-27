import "./styles.css";

const colors = ["#2E88D5", "#904FAD", "#EEBC10"];
const hello = document.querySelector("body");

function colorHandle() {
  if (window.innerWidth < 400) {
    hello.style.backgroundColor = colors[0];
  } else if (window.innerWidth >= 400 && window.innerWidth < 600) {
    hello.style.backgroundColor = colors[1];
  } else {
    hello.style.backgroundColor = colors[2];
  }
}

colorHandle();
window.addEventListener("resize", colorHandle);
