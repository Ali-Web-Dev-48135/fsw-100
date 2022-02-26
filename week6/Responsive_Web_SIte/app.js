const mainNavContainer = document.getElementById("main-nav-container");
const mainNav = document.getElementById("main-nav");
const mainBackdrop = document.querySelector(".main-main");

const displayHamburgerMenu = (e) => {
  e.preventDefault();
  mainNav.classList.toggle("visible");
  toggleBackrop();
};

const toggleBackrop = () => {
  mainBackdrop.classList.toggle("main-main-backdrop");
};
mainNavContainer.addEventListener("click", displayHamburgerMenu);
