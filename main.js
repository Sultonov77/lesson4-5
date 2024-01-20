// Forgot password,parol unutilganda ishga tushadi
const forgot = document.querySelector(".forgot__pass");
const link = document.createElement("a");
link.textContent = "Forgot password?";
link.style.fontSize = "21px";
link.style.textDecoration = "none";
link.setAttribute("href", "https://support.com");
link.setAttribute("target", "_blank");
forgot.style.textAlign = "start";
forgot.append(link);
// ==============================================
// Button bosilanda ishga tushadi
const button = document.querySelector(".button");
button.addEventListener("click", function1);
function function1(p) {
  button.style.color = "purple";
  button.style.border = " solid 1px black";
}
// ==============================================
// Form uchun yozilgan code
const form = document.querySelector(".login__desk");
const error = document.querySelector("#error");
error.style.color = "red";
error.style.fontSize = "22px";
const passValid = (passValue) => {
  const pattern = /^[a-zA-Z0-9]{5}$/;
  const result = pattern.test(passValue);
  if (!result) {
    error.textContent = "Value must be at least 6 characters";
  } else {
    error.textContent = " ";
    return result;
  }
};
const handleSubmit = (p) => {
  p.preventDefault();
  const emailVal = p.target[0].value;
  const passVal = passValid(p.target[1].value.trim());

  if (emailVal.trim().lenght !== 0 && passVal) {
    window.location.href = "home.html";
  }
};
form.addEventListener("submit", handleSubmit);
// =============================================
