var swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
});
// wow
new WOW().init();
// start nav
let nav = document.querySelector("nav");
let menu = document.querySelector("nav .menu");
let menuUl = document.querySelector("nav ul");
menu.addEventListener("click", () => {
  menuUl.classList.toggle("show");
});
window.addEventListener("scroll", () => {
  if (window.scrollY > 119) {
    nav.style.position = "fixed";
    nav.style.top = "0";
    nav.style.left = "0";
    nav.style.right = "0";
    nav.style.zIndex = "500";
  } else {
    nav.style.position = "";
  }
});
// when i click on nav item nav disapper
let navLink = document.querySelectorAll("header nav ul li a");
navLink.forEach((e) => {
  e.addEventListener("click", function () {
    menuUl.classList.remove("show");
  });
});
