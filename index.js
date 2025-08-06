function getPetExerciseInfo(mascota, edad) {
    if (typeof mascota !== 'string') {
        return 'Tipo de mascota invalida';
    }
    const tipoMascota = mascota.toLowerCase();

    if (tipoMascota === 'perro') {
        if (edad < 1) {
            return 'Los cachorros necesitan pequeñas y frecuentes sesiones de juego.'
        } else if (edad >= 1 && edad <= 7) {
            return 'Los perros a esta edad necesitan caminatas diarias y sesiones de juego.'
        } else {
            return 'Los perros viejos necesitan caminatas mas cortas.'
        }
    } else if (tipoMascota === 'gato') {
        if (edad < 1) {
            return 'Los gatitos necesitan frecuentes sesiones de juego.'
        } else if (edad >= 1 && edad <= 7) {
            return 'Los gatos a esta edad neesitan jugar diariamente.'
        } else {
            return 'Los gatos viejos necesitan sesiones de juego mas cortas.'
        }
    } else if (tipoMascota === 'ave') {
        if (edad < 1) {
            return 'Las aves jovenes necesitan mucho espacio para volar.'
        } else if (edad >= 1 && edad <= 7) {
            return 'Las aves necesitan jugar diariamente y un lugar para volar.'
        } else {
            return 'Las aves mayores necesitan descansar mas, pero siguen ocupando un lugar para volar.'
        }
    } else {
        return 'Tipo de mascota invalida';
    }
}

console.log(getPetExerciseInfo('perro', 3))
console.log(getPetExerciseInfo('ave', 8))
console.log(getPetExerciseInfo('gato', 0.5))

console.log(getPetExerciseInfo('elefante', 4))
console.log(getPetExerciseInfo('', 1))