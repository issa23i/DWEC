// Examen

let usuarios = [{nombre:'Ana Pérez Soler', DNI: '21147465T', edad: 4},
    {nombre:'Álvaro García Castro', DNI: '24545535G', edad: 32},
    {nombre:'Paloma González Máxim', DNI: '45678912L', edad: 9},
    {nombre:'Alberto Alguacil Alcalde', DNI: '79753330W', edad: 17}
]
// Ejercicio A ///////////////

const idUsuarios = arrayUsuarios => arrayUsuarios.map(usuario => idUser(usuario))

const idUser = usuario => {
    let arrayUser = (usuario['nombre'].split(' '))
        arrayUser.push(usuario['DNI'])
        arrayUser[0] = arrayUser[0].slice(0,1)
        arrayUser[1] = arrayUser[1].slice(0,3)
        arrayUser[2] = arrayUser[2].slice(0,3)
        arrayUser[3] = arrayUser[3].slice(5,8)
        arrayUser = arrayUser.join('').toLowerCase()

        arrayUser = arrayUser.replaceAll('á','a')
        arrayUser = arrayUser.replaceAll('é','e')
        arrayUser = arrayUser.replaceAll('í','i')
        arrayUser = arrayUser.replaceAll('ó','o')
        arrayUser = arrayUser.replaceAll('ú','u')
        
        return arrayUser
}

console.log(idUsuarios(usuarios));

// Ejercicio B ///////////////////


const validarDNIS = dnis => {
    dnis = dnis.filter(usuario => validarDNI(usuario['DNI']) )
    return dnis.map(usuario => usuario['DNI'])
}

const validarDNI = (dni) => {
    let esValido = false
    let letrasDNI = ['T','R','W','A','G','M','Y','F','P','D','X','B','N','J','Z','S','Q','V','H','L','C','K','E']
    let letra = dni.slice(8,9)
    letra.toUpperCase() === letrasDNI[dni.slice(0,8)%23] ? esValido = true : esValido = false
    return esValido
}

console.log(validarDNIS(usuarios));

// Ejercicio C /////////////////////

const ordenar = usuarios => usuarios.sort((n,m) => ordenarEdad(n,m))

const ordenarEdad = (user1, user2) => user2['edad'] - user1['edad']
console.log(ordenar(usuarios));

// Ejercicio D ///////////////////

const casiPrimos = usuarios => {
    let edades = usuarios.map(usuario => usuario['edad'])
    return edades.filter(edad => casiPrimo(edad))
}

const casiPrimo = n => {
    let contador = 0
    for (let i = 2; i < n; i++) {
        if(n%i === 0){
            contador++
        }
    }
    if (contador === 1){
        return true
    } else {
        return false
    }
}
console.log(casiPrimos(usuarios));