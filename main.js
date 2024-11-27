function mostrarDatos(event) {
    event.preventDefault(); // Previene el envío del formulario

    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;

    const salida = `Nombre: ${nombre} ${apellido}, Usuario: ${username}, Correo: ${email}`;
    document.getElementById('salidaDatos').innerHTML = salida;
}

function toggleModoOscuro() {
    document.body.classList.toggle("dark-mode");
}

