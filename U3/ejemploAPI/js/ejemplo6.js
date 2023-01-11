/**
 *
 */
const url = "https://formsubmit.co/ajax/ipaslop262@iesmartinezm.es";

document.addEventListener("submit", ev => {
  ev.preventDefault(); // para no actualizar la página
  const body = new FormData(ev.target);

  fetch(url, { method: "POST", body })
    .then((response) => response.json())
    .then((data) => ( data['success']=='true') ? console.log('enviado') : console.log('error') )
    .catch((error) => console.error("ERROR" + error));
});