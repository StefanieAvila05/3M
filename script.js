// --- CONFIGURACIÓN SECRETA ---
// ¡¡¡CLAVE ACTUALIZADA: 03 de Agosto de 2025!!!
const CORRECT_PASSWORD = "03082025"; 

let attemptsLeft = 3; 

// Obtener los elementos del DOM
const safeBox = document.getElementById('safe-box');
const secretMessage = document.getElementById('secret-message');
const failMessage = document.getElementById('fail-message'); // Nuevo elemento de error total
const passwordInput = document.getElementById('password');
const errorMessage = document.getElementById('error-message');
const attemptsDisplay = document.getElementById('attempts');
const successSound = document.getElementById('success-sound');


function checkPassword() {
    // Si ya no quedan intentos, ignoramos la pulsación del botón
    if (attemptsLeft <= 0) {
        return; 
    }
    
    const enteredPassword = passwordInput.value.trim();

    if (enteredPassword === CORRECT_PASSWORD) {
        // ¡Contraseña CORRECTA!
        
        // 1. REPRODUCIR LA CANCIÓN
        successSound.play(); 

        // 2. Mostrar la Carta
        safeBox.classList.add('hidden'); 
        secretMessage.classList.remove('hidden'); 

    } else {
        // Contraseña INCORRECTA
        attemptsLeft--;
        attemptsDisplay.textContent = `Intentos restantes: ${attemptsLeft}`;
        
        // Muestra el mensaje de error por un momento
        errorMessage.style.opacity = 1;
        
        setTimeout(() => {
            errorMessage.style.opacity = 0;
            passwordInput.value = ''; // Borra la entrada
        }, 1500); 

        // Comprueba si se agotaron los intentos
        if (attemptsLeft <= 0) {
            safeBox.classList.add('hidden'); // Oculta los intentos y el input
            failMessage.classList.remove('hidden'); // Muestra el mensaje de fallo con el botón
        }
    }
}

/**
 * Función para reiniciar el estado del juego.
 */
function resetGame() {
    attemptsLeft = 3; // Restablece los intentos
    attemptsDisplay.textContent = `Intentos restantes: ${attemptsLeft}`; // Actualiza el contador visible
    passwordInput.value = ''; // Limpia el campo de contraseña
    
    // Oculta el mensaje de fallo total y vuelve a mostrar la caja fuerte
    failMessage.classList.add('hidden');
    safeBox.classList.remove('hidden');
}