// start accordion
const accordion = document.querySelectorAll(".accordion_box");
console.log(accordion);

for (i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener("click", function () {
    this.classList.toggle("active-accordion");
  });
}

// accordion.forEach((e) => {
//   e.addEventListener("click", function () {
//     accordion.forEach((e) => {
//       e.classList.remove("active-accordion");
//     });
//     this.classList.toggle("active-accordion");
//   });
// });
// start menu
let menu = document.getElementById("menu");
let ul = document.getElementById("ul");
let activeOne = document.getElementById("active-one");
let nav = document.querySelector(".main-nav").querySelectorAll("a");

nav.forEach((e) => {
  e.addEventListener("click", () => {
    ul.classList.remove("show");
    activeOne.classList.remove("active-two");
  });
});
menu.addEventListener("click", () => {
  ul.classList.toggle("show");
  activeOne.classList.toggle("active-two");
});
