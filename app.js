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

setInterval(() => {
  setDate();
  setTime();
}, 1000);

function convertToDoubleDigit(num){
  return num < 10 ? "0" + num : num;
};

function setTime(){
  const today = new Date();

  const hour = document.getElementById("hour");
  const minute = document.getElementById("minute");
  const second = document.getElementById("second");
  const timeOfDay = document.getElementById("timeOfDay");

  timeOfDay.textContent = today.getHours < 12 ? "am" : "pm";
  hour.textContent = convertToDoubleDigit(parseInt(today.getHours()) % 12);
  minute.textContent = convertToDoubleDigit(today.getMinutes());
  second.textContent = convertToDoubleDigit(today.getSeconds());
}

function setDate(){
  const today = new Date();

  const dayOfWeek = daysOfWeek[today.getDay()];
  const month = months[today.getMonth()];
  const dayOfMonth = today.getDate();
  const year = today.getFullYear();

  let suffix;
  switch (
    dayOfMonth < 10 ? dayOfMonth : String(dayOfMonth).split("")[dayOfMonth.length - 1]
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
}
