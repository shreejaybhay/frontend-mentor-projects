// function validateEmail() {
//   const emailInput = document.getElementById("emailInput");
//   const email = emailInput.value;
//   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   const emailError = document.getElementById("emailError");
//   const successState = document.getElementById("success-state");
//   const maindiv = document.getElementById("main-div");

//   if (!emailRegex.test(email)) {
//     emailError.textContent = "Invalid email address";
//     emailInput.style.backgroundColor = "#ffe8e6";
//     emailInput.style.borderColor = "#c2817d";
//     return false;
//   } else {
//     emailError.textContent = "";
//     maindiv.style.display = "none";
//     successState.style.display = "block";
//     emailInput.style.backgroundColor = "#ffffff";
//     emailInput.style.borderColor = "#D1D5DB";
//     return true;
//   }
// }

// function closediv() {
//   document.getElementById("success-state").style.display = "none";
//   document.getElementById("emailInput").value = "";
//   document.getElementById("main-div").style.display = "";
// }

// function validateForm() {
//   return validateEmail();
// }

function validateEmail() {
  const emailInput = document.getElementById("emailInput");
  const email = emailInput.value;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const emailError = document.getElementById("emailError");
  const successState = document.getElementById("success-state");
  const mainDiv = document.getElementById("mainDiv");

  if (!emailRegex.test(email)) {
    emailError.textContent = "Invalid email address";
    emailInput.style.backgroundColor = "#ffe8e6";
    emailInput.style.borderColor = "#c2817d";
    return false;
  } else {
    emailError.textContent = "";
    mainDiv.style.display = "none";
    successState.style.display = "block";
    emailInput.style.backgroundColor = "#ffffff";
    emailInput.style.borderColor = "#D1D5DB";
    return true;
  }
}

function closediv() {
  document.getElementById("emailInput").value = "";
  document.getElementById("success-state").style.display = "none";
  document.getElementById("mainDiv").style.display = "";
}

function validateForm(event) {
  event.preventDefault();
}

document.querySelector("form").addEventListener("submit", validateForm);
