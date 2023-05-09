const userData = [
  {
    username: "nest",
    email: "nest@nhs.edu.mn",
    password: "Nest12345678",
    secQ: "name?",
    secA: "nest",
  },
];
function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
  
    if (username == "" || password == "") {
      document.getElementById("message").innerHTML = "Please fill in all fields.";
      return false;
    }
  
    // Here you can add your login logic.
    // If the username and password are correct, redirect the user to another page.
    // If the username and password are incorrect, display an error message.
  
    // Example login logic:
    if (username == "myusername" && password == "mypassword") {
      window.location.href = "success.html";
    } else {
      document.getElementById("message").innerHTML = "Incorrect username or password.";
    }
  }
  