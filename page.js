const burgerBtn = document.querySelector(".burger-menu-btn");
const burgerMenu = document.querySelector(".burger-menu");
let isBurgerOpen = false;

burgerBtn.onclick = function () {
  if (isBurgerOpen) {
    burgerMenu.style.display = "none";
    burgerBtn.style.backgroundPosition = "center, center left 50px";
    isBurgerOpen = false;
  } else {
    burgerMenu.style.display = "block";
    burgerBtn.style.backgroundPosition = "center left 50px, center";
    isBurgerOpen = true;
  }
};
