const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
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

const convertToDoubleDigit = (num) => {
  return num < 10 ? "0" + num : num;
};

setInterval(() => {
  let today = new Date();

  let hour = document.getElementById("hour");
  let minute = document.getElementById("minute");
  let second = document.getElementById("second");
  let timeOfDay = document.getElementById("timeOfDay");

  timeOfDay.textContent = today.getHours < 12 ? "am" : "pm";
  hour.textContent = convertToDoubleDigit(parseInt(today.getHours()) % 12);
  minute.textContent = convertToDoubleDigit(today.getMinutes());
  second.textContent = convertToDoubleDigit(today.getSeconds());

  let dayOfWeek = daysOfWeek[today.getDay()];
  let month = months[today.getMonth()];
  let dayOfMonth = today.getDate();
  let year = today.getFullYear();

  let suffix;
  switch (
    dayOfMonth < 10 ? dayOfMonth : dayOfMonth.split("")[dayOfMonth.length - 1]
  ) {
    case 1:
      suffix = "st";
      break;
    case 2:
      suffix = "nd";
      break;
    case 3:
      suffix = "rd";
      break;
    default:
      suffix = "th";
  }

  let fullDate = document.getElementById("full-date");
  fullDate.textContent = `${dayOfWeek}, ${month} ${dayOfMonth}${suffix} ${year}`;
}, 1000);

let today = new Date();
console.log(today.getDate());
console.log(today.getDay());
