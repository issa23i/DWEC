/**
 * 13. DESGLOSE CADENA
Realiza un programa que reciba una cadena con el siguiente formato:
“nombre:apellidos:telefono:email:codigopostal”
Tras recibir la cadena, debe desglosar y mostrar la siguiente información:
● Código postal.
● Apellidos.
● Email.
● Suponiendo un formato de email “direccion@servidor” debe mostrar el nombre del servidor
asociado.
 */
let str = "Isabel:Pastor López:628668412:ipaslop262@iesmartinezm.es:41005"
const desglose = str => {
    let array = str.split(":")
    return {cp:array[4],apellidos:array[1],email:array[3],servidor:array[3].split("@")[1]}
}
console.log(desglose(str));