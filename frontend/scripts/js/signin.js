document.addEventListener("DOMContentLoaded", () => {
  const signInForm = document.querySelector("#login");
  const signUpForm = document.querySelector("signup");

  signInForm.addEventListener("click", (event) => {
    event.preventDefault();
    const formData = Object.fromEntries(new FormData(event.target).entries());
})
    signInForm.classList.remove("form--hidden");
    signUpForm.classList.add("form--hidden");
  });
});
