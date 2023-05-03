const usersTable = [
  // Note: This is a fake table for educational purposes. Never store user credentials in plain text.
  { id: 1, username: "hello@world.com", password: "badpassword" },
  { id: 2, username: "test@user.com", password: "badpassword" },
  { id: 3, username: "email@domain.com", password: "badpassword" },
];
let renderSuccess = () => {
  document.getElementById("success-message").hidden = false;
};
let renderError = () => {
  document.getElementById("error-message").hidden = false;
};
let resetMessage = () => {
  document.getElementById("success-message").hidden = true;
  document.getElementById("error-message").hidden = true;
};
let showPassword = () => {
  let passwordInput = document.getElementById("password");
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
  } else {
    passwordInput.type = "password";
  }
};


const showButton = document.getElementById("show");
showButton.addEventListener("click", (event) => {
  event.preventDefault();
  let passwordInput = document.getElementById("password");
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    showButton.textContent = "Hide Password";
  } else {
    passwordInput.type = "password";
    showButton.textContent = "Show Password";
  }
});

document.getElementById("submitButton").addEventListener("click", (event) => {
  event.preventDefault();
  resetMessage();

  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  console.log(`email submitted: ${email}`);
  console.log(`password submitted: ${password}`);

  var valid = false;
  for (let i = 0; i < usersTable.length; i++) {
    const user = usersTable[i];
    if (user.username == email) {
      valid = true;
    }
  }
  if (valid) {
    renderSuccess();
  } else {
    renderError();
  }
});
