import hamburgerMenu from "./menu-hamburguesa.js";
import { alarm, digitalClock } from "./reloj.js";
import { shortcuts, moveBall } from "./teclado.js";
import coutdown from "./cuenta-regresiva.js";
import scrollTopButton from "./boton-scroll.js";
import darkTheme from "./tema-oscuro.js";
import responsiveMedia from "./objeto-responsive.js";
import resposiveTester from "./prueba-responsive.js";
import userDeviceInfo from "./deteccion-dispositivos.js";
import networkStatus from "./deteccion-red.js";
import webCam from "./deteccion-webcam.js";
import getGeolocation from "./geolocalizacion.js";
import searchFilters from "./filtro-busquedas.js";
import draw from "./sorteo-digital.js";
import slider from "./carrusel.js";
import scrollSpy from "./scroll-spy.js";
import smartVideo from "./video-inteligente.js";
import contactFormValidations from "./validaciones-formulario.js";
import speechReader from "./narrador.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
  hamburgerMenu(".panel-btn", ".panel", ".menu a");
  digitalClock("#reloj", "#activar-reloj", "#desactivar-reloj");
  alarm("../assets/alarma.mp3", "#activar-alarma", "#desactivar-alarma");
  coutdown("countdown", "May 12, 2022 23:25:00", "Felicidades 🤗"); //puedes usar emojipedia.org
  scrollTopButton(".scroll-top-btn");
  
  responsiveMedia(
    "youtube",
    "(min-width:1024px)",
    `<a href="https://youtu.be/CzEjL5MmLJs" target="_blank" rel="noopener">Ver vídeo </a>`,
    `<iframe width="560" height="315" src="https://www.youtube.com/embed/CzEjL5MmLJs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
  );
  responsiveMedia(
    "gmaps",
    "(min-width:1024px)",
    "Contenido móvil",
    "Contenido escritorio"
  );
  resposiveTester("responsive-tester");
  userDeviceInfo("user-device");
  webCam("webcam");
  getGeolocation("geolocation");
  searchFilters(".card-filter",".card");
  draw("#winner-btn",".player");
  slider();
  scrollSpy();
  smartVideo();
  contactFormValidations();
  

});

d.addEventListener("keydown", (e) => {
  shortcuts(e);
  moveBall(e, ".ball", ".stage");
});

darkTheme(".dark-theme-btn", "dark-mode");
networkStatus();
speechReader();