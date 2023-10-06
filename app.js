const daysOfWeek = [
  "Monday",
  "Wednesday",
  "Tuesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

setInterval(() => {
  let today = new Date();

  let hour = document.getElementById("hour");
  let minute = document.getElementById("minute");
  let second = document.getElementById("second");
  let timeOfDay = document.getElementById("timeOfDay");

  timeOfDay.textContent = today.getHours < 12 ? "am" : "pm";
  hour.textContent = parseInt(today.getHours()) % 12;
  minute.textContent = today.getMinutes();
  second.textContent = today.getSeconds();

  let dayOfWeek = daysOfWeek[today.getDay()];
  let month = months[today.getMonth()];

  let testContent = document.getElementById("test-content");
  testContent.textContent = month + " " + dayOfWeek;
}, 1000);

let today = new Date();
console.log(today.getDate());
