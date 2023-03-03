let Snickers = 1000;
let Twix = 1250;
let Bounty = 1500;
let Hershey = 2000;
let total;
function CandyShop() {
  let Sshirheg = document.getElementById("Sshirheg").value;
  let Tshirheg = document.getElementById("Tshirheg").value;
  let Bshirheg = document.getElementById("Bshirheg").value;
  let Hshirheg = document.getElementById("Hshirheg").value;
  let total = 0;
  if (Sshirheg != "") {
    total += Sshirheg * Snickers;
    document.getElementById("receipt").innerHTML = document.getElementById("receipt").innerHTML + Sshirheg + " " + "Snickers" + " " + Sshirheg * Snickers + "T" + "<br>";
  }
  if (Tshirheg != "") {
    total += Tshirheg * Twix;
    document.getElementById("receipt").innerHTML = document.getElementById("receipt").innerHTML + Tshirheg + " "+ "Twix" + " " + Tshirheg * Twix + "T" + "<br>";
  }
  if (Bshirheg != "") {
    total += Bshirheg * Bounty;
    document.getElementById("receipt").innerHTML = document.getElementById("receipt").innerHTML + Bshirheg + " "+ "Bounty" + " " + Bshirheg * Bounty + "T" + "<br>";
  }
  if (Hshirheg != "") {
    total += Hshirheg * Hershey;
    document.getElementById("receipt").innerHTML = document.getElementById("receipt").innerHTML + Hshirheg +" "+ "Hershey" + " " + Hshirheg * Hershey + "T";
  }
  document.getElementById("total").innerHTML =total+"T"; 
}