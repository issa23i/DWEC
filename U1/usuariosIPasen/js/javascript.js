// crear un objeto literal que muestre alumnos con nobmre y dni 
// y los convierta a usuarios IPasen (ipaslop262)
let alumnos = [
    {nombre: "Isabel Pastor López", dni: "44753262T"},
    {nombre: "Mariano Benavent Castaño", dni: "28555222Z"},
    {nombre: "Angeles Castro Quintana", dni: "66777888L"}
]


const stringToIPasen = alumno => {
    let array = alumno["nombre"].split(" ") // Dividir nombre, apellido1 y apellido2 en tres strings dentro de un array
    array.push(alumno["dni"]) // Se le añade la cadena dni
    array[0] = array[0].slice(0,1) // primera letra del nombre
    array[1] = array[1].slice(0,3) // tres primeras letras del apellido1
    array[2] = array[2].slice(0,3) // tres primeras letras del apellido2
    array[3] = array[3].slice(5,8) // tres últimos dígitos del dni (sin la letra)
    return array.join("").toLowerCase()
}


const toIPasen = (alumnos) => {
    
    alumnos.map(alumno => {
        alumno["iPasen"] = stringToIPasen(alumno)
    })
    return alumnos
}
console.log(toIPasen(alumnos));