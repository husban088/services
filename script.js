let e0 = document.querySelector(".knob-ribbon");
let e1 = document.querySelector(".line-dot");
let e2 = document.querySelector(".marge-line");
let e3 = document.querySelector(".step-dot");
let e4 = document.querySelector(".info-token");
let e;
function myFunction() {
  e0.style.display = "block";
  setTimeout(() => {
    e1.style.display = "block";
  }, 500);
  setTimeout(() => {
    e3.style.display = "block";
  }, 550);
  setTimeout(() => {
    e2.style.display = "block";
  }, 600);
  setTimeout(() => {
    e4.classList.add("rotate");
  }, 650);
}
