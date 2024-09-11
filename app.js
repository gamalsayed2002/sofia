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
new WOW().init();
// email js
// emailjs.init("BHPWqZaqxG6tCDcnE");
emailjs.init("qH1rBr6KP0DO8XSJq");
const btn = document.getElementById("button");

function sendMail() {
  var params = {
    from_name: document.getElementById("name").value,
    name: document.getElementById("name").value,
    email_id: document.getElementById("email").value,
    message: document.getElementById("message").value,
    phone: document.getElementById("phone").value,
  };
  emailjs.send("service_7h20fkq", "template_a3b4eai", params).then(() => {
    Swal.fire({
      title: "تم إرسال البيانات",

      icon: "success",
    });
    name = document.getElementById("name").value = "";
    email = document.getElementById("email").value = "";
    message = document.getElementById("message").value = "";
    phone = document.getElementById("phone").value = "";
  });
}
