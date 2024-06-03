const toggleButton = document.getElementById("toggleButton");
const nav = document.querySelector(".header-nav");
const esk = document.querySelectorAll(".header-burger-line");


toggleButton.addEventListener("click", () => {
  for (i = 0; i < esk.length; i++) {
    esk[i].classList.toggle("esk");
  }
});


toggleButton.addEventListener("click", () => {
  nav.classList.toggle("header-nav-toggle");
});










