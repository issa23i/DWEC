/**
9. TEMPORIZADOR DNI
Realiza un programa que cada 20 segundos (mediante setInterval) solicite un DNI hasta que alguien
le escriba la cadena “-1”.
En ese momento, el programa debe mostrar seguidas las letras de todos los DNIs introducidos.
Aquí un enlace para saber como calcular la letra de DNI:
https://es.wikipedia.org/wiki/N%C3%BAmero_de_identificaci%C3%B3n_fiscal */


const pushDni = () => {
    
    let regex = new RegExp(/[0-9]{8}/)
    let dni = 0
    let dnis = []
    do{
        dni = prompt('Inserte un dni sin letra (8 digitos)')
        if(regex.test(dni)){
            dni = dni.concat(letra(dni))
            dnis.push(dni)
        }
    } while (dni!=='-1')
    
    if (dni==='-1'){
        clearInterval(intervalo)
        console.log(dnis);
    }


    return dnis
}

const letra = (dni) =>{
    control=['T',	'R',	'W',	'A',	'G',	'M',	'Y',	'F',	'P',	'D',	'X',	'B',	'N',	'J',	'Z',	'S',	'Q',	'V',	'H',	'L',	'C',	'K',	'E']
    return control[dni%23]

}

let intervalo = setInterval("pushDni()",5000)

