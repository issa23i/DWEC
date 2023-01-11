/**
 *
 */
const url = "https://formsubmit.co/ajax/ipaslop262@iesmartinezm.es";

const form = document.querySelector(".miFormulario");

const post = (url, body) => fetch(url, { method: "POST", body });

form.addEventListener("submit", function (ev) {
  ev.preventDefault(); // para no actualizar la página
  const data = new FormData(form);

  post(url, data)
    .then((response) => response.json())
    .then((data) => ( data['success']=='true') ? console.log('enviado') : console.log('error') )
    .catch((error) => console.error("ERROR" + error));
});