// const sections = document.querySelectorAll(".section");
// const buttons = document.querySelectorAll(".buttons");
// const btn = document.querySelectorAll(".btn");
// const body = document.querySelector(".body");

// function buttonChange() {
//   for (let i = 0; i < btn.length; i++) {
//     btn[i].addEventListener("click", function () {
//       let currentBtn = document.querySelectorAll(".active-btn");
//       currentBtn[0].className = currentBtn[0].className.replace(
//         " active-btn",
//         ""
//       );
//       this.className += "active-btn";
//     });
//   }
// }

// buttonChange();

const sections = document.querySelectorAll(".section");
const buttons = document.querySelectorAll(".buttons");
const btn = document.querySelectorAll(".btn");
const body = document.querySelector(".body");

function buttonChange() {
  for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener("click", function () {
      let currentBtn = document.querySelectorAll(".active-btn");
      if (currentBtn[0]) {
        currentBtn[0].className = currentBtn[0].className.replace(
          "active-btn",
          ""
        );
      }
      this.className += " active-btn";
    });
  }

  body.addEventListener("click", function (e) {
    const id = e.target.dataset.id;
    if (id) {
      //REMOVE SELECTED FROM THE OTHER BUTTONS
      buttons.forEach(function (btn) {
        btn.classList.remove("active");
      });
      e.target.classList.add("active");

      //HIDE OTHER SECTIONS
      sections.forEach(function (section) {
        section.classList.remove("active");
      });

      const element = document.getElementById(id);
      element.classList.add("active");
    }
  });
}

buttonChange();

// ===== MODAL =====//

const openModal = document.querySelector(".sub__btn");
const closeModal = document.querySelector(".modal-close");
const modal = document.querySelector(".modal");

openModal.addEventListener("click", function () {
  modal.classList.remove("hidden");
});

closeModal.addEventListener("click", function () {
  modal.classList.add("hidden");
});

///////// SEND BUTTON ////////

function sendEmail() {
  const sender = document.getElementById("name").value;
  const emailadd = document.getElementById("email").value;
  const message = document.getElementById("message").value;
  const connect = document.getElementById("connect").value;

  Email.send({
    SecureToken: "439af23f-8b4a-4846-875c-07e44d846123",
    To: "mondragonstpn@gmail.com",
    From: "mondragonstpn@gmail.com",
    Subject: "Profile Web Mail",
    Body: `Name: ${sender} <br/> Email: ${emailadd} <br/> Message: ${message}`,
  }).then((message) => alert("Message sent succesfully!"));
}
