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
        let ipasen = alumno["nombre"].split(" ")
        ipasen.push(alumno["dni"])
        ipasen[0] = ipasen[0].slice(0,1)
    })
}