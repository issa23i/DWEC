const d = document;
const $btn = d.querySelector('button')

// eventos
/**
 * Si no existe, la crea
 * devuelve la cookie
 */
const checkCookie = () => {
  let user = getCookie("username");
  if (user == "") {
    user = prompt("Por favor, escribe tu nombre: ", "");
    if (user !== "" && user !== null) {
      setCookie("username", user, 365);
    }
  }
  let visitas = contadorVisitas(user)
  showMessage(user, visitas);
};

const borrarCookie = () => {
    let nombre = getCookie('username')
    setCookie(nombre,'',-365)
    setCookie('username','',-365)
}

// listeners
window.addEventListener("load", checkCookie);
$btn.addEventListener('click',borrarCookie)

// funciones
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

function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  let expires = "expires=" + d.toUTCString();
  console.log(expires);
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

const contadorVisitas = (usuario) => {
    let visitas = getCookie(usuario)
    if (visitas==''){
        setCookie(usuario,0,365)
    } else {
        visitas = parseInt(visitas)
        visitas++
        setCookie(usuario,visitas,365)
    }
    return visitas
}

const showMessage = (usuario, visita) => {
  const $p = d.querySelector("p");
  $p.textContent = 'Hola ' + usuario + ', esta es tu ' + visita + 'ª visita';
};


