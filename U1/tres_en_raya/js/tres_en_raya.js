/**
 *  corregir : CONTRA LA MÁQUINA
 * CORREGIR: PROMPT RECOGER ENTRADA CON STRING
 * LLENO : CONTAR JUGADAS PARA SABER CUÁNDO PUEDE SER TRES EN RAYA (3 JUGADAS) Y SALTAR LLENO CUANDO 9 JUGADAS 
 * CONSOLE.LOG TABLE MUESTRA LA TABLA
 * EMPTY : SE PASA DEMASIADO POR PARÁMETRO, MEJOR QUE LA CELDA VACÍA SEA CON ' '
 * ¿¿ REALIZAR CLASES ??? POR EJEMPLO CLASS JUGADA
 */

/**3. TRES EN RAYA
Realiza el juego del tres en raya contra otro jugador o contra la máquina (con números aleatorios).
Puedes hacerlo usando en cada jugada las coordenadas de X u O desde 0,0 (esquina superior
izquierda) a 2,2 (esquina inferior derecha). */


/**
 * Comprueba el tablero en busca de tres en raya de algún jugador, si no lo encuentra devuelve una cadena vacía
 * Si encuentra un tres en raya, devuelve el jugador (player1 o player2)
 * @param matriz tablero
 * @returns string 
 */
const isTresEnRaya = (matriz, empty) => {
    if ( (matriz[0][0]===matriz[0][1]) && (matriz[0][0]===matriz[0][2]) && (matriz[0][0]!==empty ) ) { // linea 0 
        return matriz[0][0]
    }
    if ( (matriz[1][0]===matriz[1][1]) && (matriz[1][0]===matriz[1][2]) && (matriz[1][0]!==empty) ) { // linea 1
        return matriz[1][0]
    }
    if ( (matriz[2][0]===matriz[2][1]) && (matriz[2][0]===matriz[2][2]) && (matriz[2][0]!==empty) ) { // linea 2
        return matriz[2][0]
    }
    if ( (matriz[0][0]===matriz[1][0]) && (matriz[0][0]===matriz[2][0]) && (matriz[0][0]!==empty) ) { // columna 1
        return matriz[0][0]
    }
    if ( (matriz[0][1]===matriz[1][1]) && (matriz[0][1]===matriz[2][1]) && (matriz[0][1]!==empty) ) { // columna 1
        return matriz[0][1]
    }
    if ( (matriz[0][2]===matriz[1][2]) && (matriz[0][2]===matriz[2][2]) && (matriz[0][2]!==empty) ) { // columna 1
        return matriz[0][2]
    }
    if ( (matriz[0][0]===matriz[1][1]) && (matriz[0][0]===matriz[2][2]) && (matriz[0][0]!==empty) ) { // cruz 1
        return matriz[0][0]
    }
    if ( (matriz[0][2]===matriz[1][1]) && (matriz[0][2]===matriz[2][0]) && (matriz[0][2]!==empty) ) { // columna 1
        return matriz[0][2]
    } 
    return ' '
}

/**
 * Comprueba que todas las casillas NO estén vacías
 * Si retorna true, es que está llena y es empate
 * @param  matriz tablero
 * @returns boolean
 */
const freeCells = (matriz, empty) => {
    let cellFree = false
    for (const i of matriz) {
        matriz.map(i => i.map (j => { if (j === empty) cellFree = true}))
    }
    return cellFree
}
/**
 * Comprueba que la celda está vacía
 * @param  matriz tablero
 * @param  move movimiento
 * @returns boolean
 */
const checkIsEmpty = (matriz, move, empty) => {
    return matriz[move["fila"]][move["columna"]] === empty ? true : false
}

/**
 * recoje del usuario una fila y una columna, crea un objeto literal (movimiento)
 * y lo devuelve
 * @returns object objeto literal
 */
const newMovement = (player) => {
    let row = parseInt(prompt(`${player}, inserte el número de fila`))
    let col = parseInt(prompt(`${player}, inserte el número de columna`))
    return {fila:row,columna:col}
    
}

const botPlay = (matriz) => {
    /// AQUÍ UN RANDOM
    // TIENE QUE DEVOLVER LA JUGADA
}

const run = () => {
    let player = ['player 1', 'player 2']
    let empty = 'empty'
    let matriz = [...Array(3)].map(() => Array(3).fill(empty)) // se crea y rellena de celdas vacías cell[0]='empty'
    let turno = player[1] // jugador 2 (cambia a jugador 1 en la primera iteración)
    
    while (isTresEnRaya(matriz, empty) === ' ') {  
        
        if (freeCells(matriz, empty)){ // comprobar que aún quedan huecos vacíos

            // cambiar de jugador
            turno === player[0] ? turno = player[1] : turno = player[0]
            // pide movimiento al jugador que tiene el turno
            let movement = newMovement(turno)


            let isEmpty = checkIsEmpty(matriz,movement,empty)
            // comprueba que esa celta está vacía, si no sigue pidiendo

            while ( ! isEmpty ){ // mientras devuelva false, repetir hasta encontrar una celda vacía
                console.log(`celda ocupada, vuelva a intentarlo`);
                movement = newMovement(turno)
            }

            // pone la ficha del jugador que tiene el turno
            matriz[movement["fila"]][movement["columna"]] = turno
            /******//////////////////      comprobación ///////////////////////////// */
            console.log(`el jugador ${turno} a puesto la ficha (${movement["fila"]},${movement["columna"]})`);
            console.table(matriz);
            /**////////////////////////////////////////////////////////////////////// */
        } else { 
            console.log(`El tablero está lleno y no se ha hecho tres en raya, empate`);
            return
        }
        
    }
    console.log(`¡¡¡ Enhorabuena ${turno}, has ganado !!!`);
}

run()

// matriz[0][0]=cell[2]
// matriz[0][1]=cell[1]
// matriz[0][2]=cell[1]
// tresEnRaya(matriz)
// console.log(`¡¡¡ Enhorabuena ${tresEnRaya(matriz)}, has ganado !!!`);

