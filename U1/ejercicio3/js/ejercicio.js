//Dada una hora en horas, minutos y segundos, indicar qué hora será pasado un segundo.
let hour, min, sec, max, timeToAdd; // hora, minutos, segundos, tiempo a añadir

function checkNumber(num) {
  while (isNaN(num) || num < 0) {// mientras no sea número o sea menor de 0 
    num = parseInt( prompt(`Introduzca un número entero positivo`) )
  }
  timeToAdd = Math.trunc(num/max) 
  return num % max
}

function setSecond() {
  timeToAdd = 0
  max = 60;
  sec = parseInt( prompt(`Introduzca los segundos`) )
  sec = checkNumber(sec);
}

function setMinut() {
  max = 60;
  min = parseInt( prompt(`Introduzca los minutos`) );
  min = min + timeToAdd
  min = checkNumber(min);
}

function setHour() {
  max = 24
  hour = parseInt( prompt(`Introduzca las horas`) )
  hour = hour + timeToAdd
  hour = checkNumber(hour)
}

function showTime() {
  alert(`Son las ${hour}:${min}:${sec} `)
}


setSecond()
setMinut()
setHour()
showTime()
