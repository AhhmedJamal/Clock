function currentTime() {
  let date = new Date();

  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();

  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();

  if (seconds < 10) {
    seconds = `0${seconds}`;
  }
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  if (hours < 10) {
    hours = `0${hours}`;
  }
  if (hours == "00") {
    hours = "12";
  }
  let time = `${hours}:${minutes}:${seconds}`;
  document.querySelector(".time").innerHTML = time;
  let theDate = `Today is: ${day} / ${month} / ${year}`;
  document.getElementById("date").innerHTML = theDate;
}

setInterval(() => {
  currentTime();
}, 1000);
