// Header
document.querySelector(".header .button--dropdown").addEventListener("click", () => {
  const menu = document.querySelector(".header__menu");
  if (menu.getAttribute("class").includes("header__menu--show")) {
    menu.classList.remove("header__menu--show")
  }
  else {
    menu.classList.add("header__menu--show")
  }
});

document.querySelector(".header .button--close").addEventListener("click", () => {
  document.querySelector(".header__menu").classList.remove("header__menu--show");
})
// End Header

// About
const shapeOne = document.querySelector(".about .shape--one");
let aboutDeg = 1;
setInterval(() => {
  shapeOne.style.rotate = `${aboutDeg++}deg`;
  if (aboutDeg == 360) aboutDeg = 0;
}, 10);
// End About

// Client
const shapeThree = document.querySelector(".client .shape--three");
const shapeFour = document.querySelector(".client .shape--four");
let clientCnt = 1;
setInterval(() => {
  if (clientCnt) {
    shapeThree.classList.add("move");
    shapeFour.classList.remove("move");
  }
  else {
    shapeThree.classList.remove("move");
    shapeFour.classList.add("move");
  }
  clientCnt = 1 - clientCnt;
}, 2000);
// End Client

// Footer Top
const shapeFive = document.querySelector(".footer-top .shape--five");
const shapeSix = document.querySelector(".footer-top .shape--six");
let footerDeg = 0, footerCheck = 0;
setInterval(() => {
  shapeFive.style.rotate = `${footerDeg}deg`;
  shapeSix.style.rotate = `${footerDeg-10}deg`;
  if (footerCheck == 0) {
    ++footerDeg;
    if (footerDeg == 30) {
      footerCheck = 1;
    }
  }
  else {
    --footerDeg;
    if (footerDeg == 0) {
      footerCheck = 0;
    }
  }
}, 100);
// End Footer Top