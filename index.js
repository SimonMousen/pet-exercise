function getPetExerciseInfo(mascota, edad) {
    if (typeof mascota !== 'string') {
        return 'Tipo de mascota invalida';
    }
    const tipoMascota = mascota.toLowerCase();

    if (tipoMascota === 'perro') {
        if (edad < 1) {
            return 'Los cachorros necesitan pequeñas y frecuentes sesiones de juego.';
        } else if (edad >= 1 && edad <= 7) {
            return 'Los perros a esta edad necesitan caminatas diarias y sesiones de juego.';
        } else {
            return 'Los perros viejos necesitan caminatas mas cortas.';
        }
    }
}