const elemento=document.querySelector("#items");
const input = document.querySelector('input[name="ndata"]');
console.log(elemento);
Array.from(elemento.options).forEach(element => { //transformamos elemento.options
//en array para poder usar foreach
alert(`Valor de la opción ${element.text} es ${element.value}`);
});
console.log(`El valor introducido en el input del data lista es ${input.value}`);