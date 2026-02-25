function login() {
  var user = document.querySelector("input[type='text']").value;
  var pass = document.querySelector("input[type='password']").value;

  if (user === "admin" && pass === "1234") {
    window.location.href = "home.html";
  } else {
    alert("Invalid Username or Password");
  }
}
