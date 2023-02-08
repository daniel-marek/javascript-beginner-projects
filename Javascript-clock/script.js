function showTime() {

  let date = new Date()
  let h = date.getHours()
  let m = date.getMinutes()
  let s = date.getSeconds()
  let day = date.getDay()
  switch (date.getDay()) {
    case 0:
      day = "Neděle"
      break;
    case 1:
      day = "Pondělí"
      break;
    case 2:
      day = "Úterý"
      break;
    case 3:
      day = "Středa"
      break;
    case 4:
      day = "Čtvrtek"
      break;
    case 5:
      day = "Pátek"
      break;
    case 6:
      day = "Sobota"
      break;
  }

  if (h < 10) {
    h = "0" + h;
  }
  if (m < 10) {
    m = "0" + m;
  }
  if (s < 10) {
    s = "0" + s;
  }

  let time = h + ":" + m + ":" + s
  let dayOfWeek = day
    
  document.getElementById("MyClockDisplay").innerText = time
  document.getElementById("MyDay").innerText = dayOfWeek

  setTimeout(showTime, 1000)

}

showTime()

