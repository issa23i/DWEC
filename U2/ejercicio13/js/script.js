/**
 * 13. Realiza un formulario con dos elementos “select”. Al cambiar el primero, se actualizará
el segundo. Al enviar el formulario, se comprobará que ambos han sido marcados.
Cuando no tengan ninguna selección previa, los “select” mostrarán “Select no
seleccionado”.
Los valores del primer “select” serán “Alicante”, “Castellón”, “Valencia”.
Por defecto no habrá ninguno seleccionado.
Los valores del segundo “select” son:
● Para Alicante: “Alicante Capital”, “Elche”, “Orihuela”.
● Para Castellón: “Castellón Capital”, “Oropesa”, “Vinaroz”.
● Para Valencia: “Valencia Capital”, “Torrent”, “Mislata”. (Aquí saldrá por defecto
seleccionado “Mislata”).
 */

const $d = document;
const $btn = $d.querySelector("button");
const $select1 = $d.querySelector("#opcionesA");
const $select2 = $d.querySelector("#opcionesB");


// Arrays del select de las poblaciones
const arraySelect2 = Array.from($select2.options)

/**
 * Ocultar todos las option del select B
 * menos la primera que es selected
 */
const ocultar = () => {
    for (const option of arraySelect2) {
        if( (! option.hasAttribute('selected')) || ( option.value === "Mislata") ){
            option.setAttribute('hidden',true)
        }
    }
    // seleccionar primero
     $select2.seletedIndex=0
}
ocultar()

/*
 * Si se ha seleccionado provincia,
 * mostrar sólo las poblaciones de esa provincia
 */
const mostrarPoblaciones = (e) => {
    // probar seletedIndex no funciona
    // console.log(arraySelect1.seletedIndex);
  switch (e.target.value) {
    case "Alicante":
        ocultar()
        let alicantes = $d.querySelectorAll('.Alicante')
        for (const option of alicantes) {
            option.removeAttribute('hidden')
        }
        $select2.selectedIndex = 0
      break;
    case "Castellon":
        ocultar()
        let castellones = $d.querySelectorAll('.Castellon')
        for (const option of castellones) {
            option.removeAttribute('hidden')
        }
        $select2.selectedIndex = 0
      break;
    case "Valencia":
        ocultar()
        let valencias = $d.querySelectorAll('.Valencia')
        for (const option of valencias) {
            option.removeAttribute('hidden')
        }
        $select2.selectedIndex = 9
      break;
    default:
        ocultar()
      break;
  }
};

const validar = (e) => {
    if ($select1.selectedIndex === 0
        || $select2.selectedIndex === 0){
            e.preventDefault()
            alert('Seleccione una provincia y una población')
        } else {
            alert('Formulario enviado')
        }
}


// añadir listeners
$select1.addEventListener('blur',mostrarPoblaciones)
$btn.addEventListener('click',validar)
