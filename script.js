document.getElementById('btnSi').addEventListener('click', function() {
    mostrarMensaje('Me alegra mucho saber que estás bien, recuerda que te amo demasiado, estoy obsesionado contigo aunque no lo creas ❤️');
});

document.getElementById('btnNo').addEventListener('click', function() {
    mostrarMensaje('Te pido disculpas por mks actitudes, se que no doy bueno,me estoy enseñando yo mismo a ser mejor para ti, porque se que no soy sudic,pero ten en cuenta que yo siepte voy apoyar sea cualquier cosa que decidas😊');
});

function mostrarMensaje(texto) {
    var mensajeDiv = document.getElementById('mensaje');
    mensajeDiv.textContent = texto;
    mensajeDiv.style.display = 'block';  // Muestra el mensaje
}
