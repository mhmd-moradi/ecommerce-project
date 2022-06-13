window.onload = function () {

  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const login_btn = document.getElementById("login-btn");

  login_btn.addEventListener("click", login);

  function login() {
    if (checkFields())
      loginRequest();
    else
      alert("Please fill all fields");
  }

  function checkFields() {
    if (email.value != "" && password.value != "")
      return true;
    return false;
  }

  function loginRequest() {
    let data = new FormData();
    data.append('email', email.value);
    data.append('password', password.value);
    axios({
      method: 'post',
      url: 'http://localhost:8000/api/login',
      data: data,
    })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
        alert("Invalid Username or Password")
      });
  }

}
