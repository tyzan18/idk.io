document.getElementById('btnSi').addEventListener('click', function() {
    mostrarMensaje('I'm glad you're well and remember that I will always be there to support you in whatever you want and decide! ❤️');
});

document.getElementById('btnNo').addEventListener('click', function() {
    mostrarMensaje('I understand that you are going through a difficult time. Don't Put too much pressure on yourself, take things slowly. I'm here if you need to talk or just tune out. Everything gets better with time.". 😊');
});

function mostrarMensaje(texto) {
    var mensajeDiv = document.getElementById('mensaje');
    mensajeDiv.textContent = texto;
    mensajeDiv.style.display = 'block';  // Muestra el mensaje
}
