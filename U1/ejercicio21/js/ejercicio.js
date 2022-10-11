const reverseText = (text ="") => text.split("").reverse().join("")//convertimos en un array, le damos la vuelta y lo volvemos a convertir a cadena
let example="hola mundo", result;
result=reverseText(example);
(result==="")? console.log("No hay cadena"): console.log(`La cadena ${example} invertida es ${result}`);