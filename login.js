window.onload = openEvent;
const userData = [
  {
    name: "nest",
    email: "nest@nhs.edu.mn",
    password: "Nest12345678",
    secQ: "name?",
    secA: "nest",
  },
];
function Signup() {
  let passOne = document.getElementById("passOne").value;
  let passTwo = document.getElementById("passTwo").value;
  let email = document.getElementById("email").value;
  let name = document.getElementById("name").value;
  let secQ = document.getElementById("secQ").value;
  let secA = document.getElementById("secA").value;

  if (passOne.length >= 8) {
    if (passOne != passOne.toLowerCase()) {
      if (passOne === passTwo) {
        console.log("pass success");
        if (name != "" && secQ != "" && secA != "" && email != "") {
          let newUser;
          newUser = {
            name: name,
            email: email,
            password: passOne,
            secQ: secQ,
            secA: secA,
          };
          userData.push(newUser);
          window.location.replace("./Homepage.html");
        } else {
          alert("fill the other inputs");
        }
      } else {
        alert("pass doesnt match");
      }
    } else {
      alert("must include capital letter");
    }
  } else {
    alert("pass is too short");
  }
  console.log(userData);
}
function Login() {
  let email = document.getElementById("lemail").value;
  let pass = document.getElementById("lpass").value;
  for (let i = 0; i < userData.length; i++) {
    if (userData[i].email == email && userData[i].password == pass) {
      window.location.replace("./Homepage.html");
    }
    else{
      alert("incorrect password or invalid account")
    }
  }
}

function Forgot() {
  let email = document.getElementById("femail").value;
  for (let i = 0; i < userData.length; i++) {
    if (userData[i].email == email) {
      document.getElementById("sQ").innerHTML = userData[i].secQ;
    }
  }
}
function Check() {
  let email = document.getElementById("femail").value;
  let userA = document.getElementById("sA").value;

  for (let i = 0; i < userData.length; i++) {
    if (userData[i].email == email && userData[i].secA == userA) {
      document.getElementById("pass").innerHTML = userData[i].password;
    }
  }
}

function openEvent(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}