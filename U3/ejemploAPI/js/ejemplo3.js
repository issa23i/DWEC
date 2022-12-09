/**
 * Cors
 */
const btn = document.querySelector('button')
const imgURL =
  "https://iesmartinezm.es/wp-content/uploads/2020/05/ibo2-1-e1591599064919.png";
const createImgFromBlob = (blob) => {
  const img = new Image();
  img.src = URL.createObjectURL(blob);
  return img;
};
const addToNode = (elemento) => {
  document.body.appendChild(elemento);
};
const logStatus = (response) => {
  console.log(response.status);
  console.log(response.statusText); //a veces aparece y otras no
  console.log(response.ok); //devuelve true si ok
  return response;
};
const checkResponse = (response) => {
  if (!response.ok) throw new Error("Código del estado no encontrado"); //envío errores para el catch final de la promesa
  return response;
};

btn.addEventListener("click", function (ev) {
  ev.preventDefault();
  const corsAnywhere = "https://cors-anywhere.herokuapp.com/";

  //accede primero a https://cors-anywhere.herokuapp.com/ o https://cors-anywhere.herokuapp.com/corsdemo para habilitarlo de forma temporal

  fetch(corsAnywhere + imgURL, {
    method: "GET",
    headers: new Headers({
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    }),
  })
    .then(logStatus)
    .then(checkResponse)
    .then((response) => response.blob())
    .then(createImgFromBlob)
    .then(addToNode)
    .catch((ex) => console.log(ex));
});
