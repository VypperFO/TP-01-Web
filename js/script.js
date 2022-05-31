const currentDate = new Date();
const dateTime =
  "Date / Heure: " +
  currentDate.getDay() +
  "/" +
  currentDate.getMonth() +
  "/" +
  currentDate.getFullYear() +
  " @ " +
  currentDate.getHours() +
  ":" +
  currentDate.getMinutes() +
  ":" +
  currentDate.getSeconds();

document.getElementById("date").innerHTML = dateTime;

// Changer langue

function changeFrench() {
  document.getElementById("support-menu").innerHTML = "support.";
  document.getElementById("monde-menu").innerHTML = "monde.";
  document.getElementById("economie-menu").innerHTML = "économie.";
  document.getElementById("russie-menu").innerHTML = "russie.";
  document.getElementById("ukraine-menu").innerHTML = "ukraine.";
}

function changeEnglish() {
  document.getElementById("support-menu").innerHTML = "support.";
  document.getElementById("monde-menu").innerHTML = "world.";
  document.getElementById("economie-menu").innerHTML = "economy.";
  document.getElementById("russie-menu").innerHTML = "russia.";
  document.getElementById("ukraine-menu").innerHTML = "ukraine.";
}
