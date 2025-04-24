const emailVerificacao = document.getElementById("email_verification");
const emailValido = document.getElementById("email_valid");
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const resultEmail = document.getElementById("result_email");
const newsletter = document.getElementById("newsletter");
const newsletterConfirmed = document.getElementById("newsletter_confirmed");
const emailConfirm = document.getElementById("email_confirm");
const confirm = document.getElementById("confirm");

function emailIsValid() {
  if (emailRegex.test(emailValido.value)) {
    newsletter.classList.add("out");
    newsletterConfirmed.classList.add("active");
    emailConfirm.textContent = emailValido.value;
  } else {
    emailValido.classList.add("invalid");
    resultEmail.textContent = "Valid email required";
  }
}

function emailSave() {
  location.reload();
}

emailVerificacao.addEventListener("click", emailIsValid);
confirm.addEventListener("click", emailSave);
