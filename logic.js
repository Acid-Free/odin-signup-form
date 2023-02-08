const passwordInput = document.querySelector("#password");
const confirmPasswordInput = document.querySelector("#password-confirm");
const passwordMatchOutput = document.querySelector(".password-match-indicator");

[passwordInput, confirmPasswordInput].forEach((element) =>
  element.addEventListener("input", (e) => {
    if (confirmPasswordInput.value !== passwordInput.value)
      passwordMatchOutput.style.visibility = "visible";
    else passwordMatchOutput.style.visibility = "hidden";
  })
);
