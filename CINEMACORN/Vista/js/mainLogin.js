// Esta función se ejecuta cuando se envía el formulario.
function validarFormulario() {
    // Obtiene el valor del campo de usuario.
    var usuario = document.getElementById("Usuario").value;
    // Obtiene el valor del campo de contraseña.
    var contrasena = document.getElementById("Contraseña").value;
    // Obtiene el elemento donde se mostrarán mensajes de error.
    var mensajeError = document.getElementById("mensajeError");

    // Restablece cualquier mensaje de error anterior.
    mensajeError.innerHTML = "";

    // Realiza la validación de campos incompletos.
    if (usuario.trim() === "" || contrasena.trim() === "") {
        // Si uno o ambos campos están vacíos, muestra un mensaje de error.
        mensajeError.innerHTML = "Por favor, completa todos los campos.";
        // Evita que se envíe el formulario si hay campos incompletos.
        return false;
    }

    // Compara los valores ingresados con los valores predeterminados.
    if (usuario.trim() === "Jose_123" && contrasena === "123") {
        // Si los valores coinciden con los predeterminados, muestra un mensaje de acceso exitoso.
        alert("Acceso exitoso");
        // Envía el formulario si los valores coinciden.
        return true;
    } else {
        // Si los valores no coinciden, muestra un mensaje de error.
        mensajeError.innerHTML = "Usuario o contraseña incorrectos.";
        // Evita que se envíe el formulario si los valores no coinciden.
        return false;
    }
}

// Esta función se ejecuta cuando se ingresa información en los campos de usuario y contraseña.
function borrarMensajeError() {
    // Obtiene el elemento donde se mostrarán mensajes de error.
    var mensajeError = document.getElementById("mensajeError");
    // Borra el mensaje de error al ingresar datos en los campos.
    mensajeError.innerHTML = "";
}
function redirigirARegistro() {
    window.location.href = "http://localhost:8383/CINEMACORN/index_Registro.html"; // Cambia "pagina-de-registro.html" por la URL de tu página de registro
}

function redirigirAEntrar() {
    window.location.href = "http://localhost:8383/CINEMACORN/index.html";
}
