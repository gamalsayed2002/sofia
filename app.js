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
