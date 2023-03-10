document.addEventListener("DOMContentLoaded", () => {
  const signInForm = document.querySelector("#login");
  const signUpForm = document.querySelector("signup");

  document.querySelector("#login").addEventListener("click", (event) => {
    event.preventDefault();
    signInForm.classList.remove("form--hidden");
    signUpForm.classList.add("form--hidden");
  });
});
