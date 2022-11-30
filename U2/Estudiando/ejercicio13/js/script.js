/**
 * 13. Realiza un formulario con dos elementos “select”. 
 * Al cambiar el primero, se actualizará
el segundo. Al enviar el formulario, se comprobará 
que ambos han sido marcados.
Cuando no tengan ninguna selección previa, 
los “select” mostrarán “Select no seleccionado”.
Los valores del primer “select” serán “Alicante”, 
“Castellón”, “Valencia”.
Por defecto no habrá ninguno seleccionado.
Los valores del segundo “select” son:
● Para Alicante: “Alicante Capital”, “Elche”, “Orihuela”.
● Para Castellón: “Castellón Capital”, “Oropesa”, “Vinaroz”.
● Para Valencia: “Valencia Capital”, “Torrent”, “Mislata”. 
(Aquí saldrá por defecto seleccionado “Mislata”).
 */
const $d = document;
const $select1 = $d.querySelector('[name="provincias"]');
const $form = $d.querySelector('form')

const seleccionado = (e) => {
    
    // optgroups de ciudades
  let optgroupA = document.querySelector('[label="Alicante"]')
  let optgroupC = document.querySelector('[label="Castellon"]')
  let optgroupV = document.querySelector('[label="Valencia"]')

    // valor seleccionado en el select provincias 
  let valor = e.target.value

    // ocultar ciudades y dejar sólo las de la provincia
  switch (valor) {
    case "Alicante":
        optgroupA.removeAttribute('hidden')
        optgroupC.setAttribute('hidden',true)
        optgroupV.setAttribute('hidden',true)
      break;
    case "Castellon":
        optgroupA.setAttribute('hidden',true)
        optgroupC.removeAttribute('hidden')
        optgroupV.setAttribute('hidden',true)
      break;
    case "Valencia":
        optgroupA.setAttribute('hidden',true)
        optgroupC.setAttribute('hidden',true)
        optgroupV.removeAttribute('hidden')
      break;
    default:
        optgroupA.removeAttribute('hidden')
        optgroupC.removeAttribute('hidden')
        optgroupV.removeAttribute('hidden')
      break;
  }

};

const validar = (e) => {
    // select provincias
    let select1 = document.querySelector('[name="provincias"]');
    // select ciudades
    let select2 = document.querySelector('[name="ciudades"]');
    
    if(select1.value === '' || select2.value === ''){
        e.preventDefault()
        let p = document.createElement('p')
        p.textContent = 'Debe seleccionar una provincia y una ciudad'
        p.style = 'background-color: red; color: white'
        e.target.appendChild(p)
        setTimeout(() => {
            p.remove()
        }, 4000);
    }
}
$form.addEventListener('submit', validar)
$select1.addEventListener("change", seleccionado);
