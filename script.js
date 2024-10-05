document.getElementById('btnSi').addEventListener('click', function() {
    mostrarMensaje('¡Me Alegro que estes bien y recuerda que siempre estare presente para apoyarte en lo que quieras y decidas! ❤️');
});

document.getElementById('btnNo').addEventListener('click', function() {
    mostrarMensaje('"Entiendo que estás pasando por un momento difícil. No te presiones demasiado, toma las cosas con calma. Estoy aquí si necesitas hablar o simplemente desconectar. Todo mejora con el tiempo.". 😊');
});

function mostrarMensaje(texto) {
    var mensajeDiv = document.getElementById('mensaje');
    mensajeDiv.textContent = texto;
    mensajeDiv.style.display = 'block';  // Muestra el mensaje
}
