/**8. CLASE HOSPITAL
Diseña una clase “Hospital”. Tendrá como atributos “nombre”, “ciudad” y “numPacientes” (número
de pacientes ingresados). Cada paciente se representará como un objeto de la clase “Paciente”. En
ella se guardaran los atributos “DNI”, “nombre”, “enfermedad”.
Implementa un método en “Hospital” que reciba el código de paciente y se le de alta a dicho paciente
(equivale a eliminar al paciente). */

class Hospital {
    constructor(nombre, ciudad, pacientes) {
        this.nombre = nombre
        this.ciudad = ciudad
        this.numPacientes = pacientes.length()
        this.pacientes = pacientes
    }
    darAltaPaciente(DNI){
        if (this.pacientes.includes(DNI)) {
            this.pacientes.slice(this.pacientes.findIndex(DNI),this.pacientes.findIndex(DNI)+1)
        }
    }
}


class Paciente {
    constructor(DNI, nombre, enfermedad) {
        this.DNI = DNI
        this.nombre = nombre
        this.enfermedad = enfermedad
    }
    get DNI() {
        return this.DNI
    }
    set DNI(DNI){
        this.DNI = DNI
    }
}