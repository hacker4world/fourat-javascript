let first_name = document.querySelector("#firstname");
let last_name = document.querySelector("#lastname");
let create_account = document.querySelector("#signup-button");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let confirm_password = document.querySelector("#confirm-password");

function verifname() {
  if (first_name.value.length == 0) {
    alert("name invalide");
    return false;
  }
}
function veriflastame() {
  if (last_name.value.length == 0) {
    alert("last name invalide");
    return false;
  }
}
function verifemail() {
  email.value = email.value.trim();
  e = email.value.indexOf("@");
  ch1 = email.value.slice(0, e);
  ch2 = email.value.slice(e);
  if (email.value.length == 0) {
    alert("email invalide");
    return false;
  } else if (ch1.length < 4 || ch2 != "@gmail.com") {
    alert("invalide mail form");
    return false;
  }
}
function pass() {
  if (password.value.length < 8) {
    alert("password invalide");
    return false;
  }
}
function confpass() {
  if (password.value != confirm_password.value) {
    alert("confirme password incorrect");
    return false;
  }
}

function call(e) {
  e.preventDefault();
  if (verifname() == false) {
    return false;
  } else if (veriflastame() == false) {
    return false;
  } else if (verifemail() == false) {
    return false;
  } else if (pass() == false) {
    return false;
  } else if (confpass() == false) {
    return false;
  }
}

create_account.addEventListener("click", call);
