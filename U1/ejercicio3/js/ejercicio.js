//Dada una hora en horas, minutos y segundos, indicar qué hora será pasado un segundo.
let hour, min, sec, max, timeToAdd; // hora, minutos, segundos, tiempo a añadir

function checkNumber(num) {
  while (isNaN(num) || num < 0) {// mientras no sea número o sea menor de 0 
    num = prompt(`Introduzca un número entero positivo`);
    // assert
    alert(`chequeando que se ha introducido bien el número por el prompt : ${num}`)
  }
  timeToAdd = Math.trunc(num/max) 
  // assert
  alert(`chequeando que el tiempo a añadir a los minutos es correcto : ${timeToAdd}`)

  //assert
  alert(`chequeando que el resultado que va a devolver el chequeador es correcto : ${num%max}`)

  return num % max
}

function setSecond(seconds) {
  timeToAdd = 0
  max = 60;
  sec = prompt(`Introduzca los segundos`);
  sec = checkNumber(sec);
  alert(sec)
}

function setMinut(minutes, minutesAdded) {
  max = 60;
  min = prompt(`Introduzca los minutos`);
   // assert
   alert(`min =  ${min}`)
   // assert
   alert(`timeToAdd =  ${timeToAdd}`)
  min =+ timeToAdd
  // assert
  alert(`min =  ${min}`)
  min = checkNumber(min);
  // assert
  alert(`min =  ${min}`)
}

setSecond()
setMinut()
