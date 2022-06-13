window.onload = function () {

  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const login_btn = document.getElementById("login-btn");

  login_btn.addEventListener("click", login);

  function login() {
      if (checkFields())
          alert("all good");
      else
          alert("Please fill all fields");   
  }

  function checkFields() {
      if (email.value != "" && password.value != "")
          return true;
      return false;
  }

}
