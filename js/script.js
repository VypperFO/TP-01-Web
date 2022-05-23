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
