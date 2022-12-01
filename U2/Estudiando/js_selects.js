const  comprobarSelect = posicion =>{
    let select = document.querySelector(posicion);

    //Esta variable guarda el índice de la opción que está seleccionada (0, 1, 2,...)
    let opcionSel = select.selectedIndex;

    //Creo un Array con las opciones del select
    let arraySel= Array.from(select.options);
   
    //Utilizo la variable opcionSel como índice del array que acabamos de crear
    console.log(arraySel[opcionSel].value);
    console.log(arraySel[opcionSel].text);
}