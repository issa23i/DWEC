// crear un objeto literal que muestre alumnos con nobmre y dni 
// y los convierta a usuarios IPasen (ipaslop262)
let alumnos = [
    {nombre: "Isabel Pastor López", dni: "44753262T"},
    {nombre: "Mariano Benavent Castaño", dni: "28555222Z"},
    {nombre: "Angeles Castro Quintana", dni: "66777888L"}
]
let arrayResultante = []
const toIPasen = (alumnos) => {
    
    alumnos.map(alumno => {

        let ipasen = (alumno["nombre"].split(" "))
        ipasen.push(alumno["dni"]) // array con nombre,apellido,apellido2,dni
        ipasen[0] = ipasen[0].slice(0,1) // primera letra del nombre
        ipasen[1] = ipasen[1].slice(0,3) // tres primeras letras del apellido1
        ipasen[2] = ipasen[2].slice(0,3) // tres primeras letras del apellido2
        ipasen[3] = ipasen[3].slice(5,8) // tres últimos dígitos del dni (sin la letra)
        ipasen = ipasen.toString().replaceAll(",","").toLowerCase()
        const {nombre, dni, iPasen} = alumno
        alumno["iPasen"] = ipasen
    })
    return alumnos
}

console.log(toIPasen(alumnos));