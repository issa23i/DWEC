$d = document
//$d.innerHTML="<h1>hola prueba</h1><p>hola prueba 2</p>";
const buttonSent = $d.querySelector('[value="enviar"]')

const mostrarInputs = () => {
    const nombre = $d.querySelector('[name="uno"]').value
    const apellido = $d.querySelector('[name="dos"]').value
    alert(`Hola ${nombre} ${apellido}`)
}
buttonSent.addEventListener("click",mostrarInputs())