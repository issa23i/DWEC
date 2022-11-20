//JS
const elemento=document.querySelector("#aprobar");
//console.log(elemento);
Array.from(elemento.options).forEach(element => { //transformamos elemento.options en
//array para poder usar foreach
alert(`Valor de la opción ${element.text} es ${element.value}`);
});
let sel=elemento.selectedIndex;
alert("El valor de la opción seleccionada es "+elemento.options[sel].value+" y el texto asociado es "+elemento.options[sel].text);
// Cambiamos el índice seleccionado
elemento.selectedIndex=1;
alert("El valor de la opción seleccionada es "+elemento.options[sel].value+" y el texto asociado es "+elemento.options[sel].text);
