const emailVerificacao = document.getElementById("email_verification");
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const resultEmail = document.getElementById("result_email");
const newsletter = document.getElementById("newsletter");
const newsletterConfirmed = document.getElementById("newsletter_confirmed");
const emailConfirm = document.getElementById("email_confirm");
const confirm = document.getElementById("confirm");

function emailIsValid() {
  const emailValido = document.getElementById("email_valid");
  if (emailRegex.test(emailValido.value)) {
    newsletter.classList.add("out");
    newsletterConfirmed.classList.add("active");
    emailConfirm.innerHTML = emailValido.value;
  } else {
    emailValido.classList.add("invalid");
    resultEmail.innerHTML = "Valid email required";
  }
}

function emailSave() {
  location.reload();
}

emailVerificacao.addEventListener("click", emailIsValid);
confirm.addEventListener("click", emailSave);
