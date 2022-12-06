/**
 * Realiza una Web que almacene en una cookie el número de visitas que has realizado (cada vez que se carga el sitio, cuenta como una visita), incrementado el valor del número de visitas a cada visita realizada. La web debe tener una interfaz para visualizar el contenido de la cookie y para eliminar la cookie.
Después realiza el mismo ejercicio almacenando el número de visitas con LocalStorage y SessionStorage.

 */


function checkCookie() {
    let contador = getCookie("contador");
    if (contador != "") {
      contador = parseInt(contador) +1
      setCookie('contador', contador, 365)
      alert("Esta es su " + contador + "ª visita");
    } else {
      contador = 0;
      if (contador !== "" && contador !== null) {
        setCookie("contador", contador, 365);
      }
    }
  }
  

window.addEventListener("load", checkCookie);


function setCookie(cname, cvalue, exdays) {
  let d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  let name = cname + "=";
  let ca = document.cookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}


