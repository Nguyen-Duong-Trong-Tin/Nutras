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
let deg = 1;
setInterval(() => {
  document.querySelector(".about .shape--one").style.rotate = `${deg++}deg`;
  if (deg == 360) deg = 0;
}, 10);
// End About