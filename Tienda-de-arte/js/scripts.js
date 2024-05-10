// Iniciar seccion 
function validateForm() {
        var email = document.getElementById("email").value;
        var password = document.getElementById("password").value;

        // Validar si el campo de correo electrónico está vacío o no es válido
        if (email.trim() === "" || !validateEmail(email)) {
            document.getElementById("error").innerHTML = "Por favor, introduce un correo electrónico válido.";
            return false;
        }

        // Validar si el campo de contraseña está vacío
        if (password.trim() === "") {
            document.getElementById("error").innerHTML = "Por favor, introduce tu contraseña.";
            return false;
        }

        // Si ambos campos son válidos, devuelve true para enviar el formulario
        return true;
    }

    // Función para validar el formato del correo electrónico
    function validateEmail(email) {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
    }
// Registrarse
function validateForm() {
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
    var remember = document.getElementById("remember").checked;

    // Verifica si algún campo está vacío
    if (username == "" || email == "" || password == "" || confirmPassword == "") {
        alert("Por favor, complete todos los campos.");
        return false;
    }

    // Verifica si las contraseñas coinciden
    if (password != confirmPassword) {
        alert("Las contraseñas no coinciden.");
        return false;
    }

    // Verifica si el nombre de usuario tiene al menos 3 caracteres
    if (username.length < 3) {
        document.getElementById("usernameError").style.display = "block";
        return false;
    } else {
        document.getElementById("usernameError").style.display = "none";
    }

    // Verifica si el correo electrónico es válido
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        document.getElementById("emailError").style.display = "block";
        return false;
    } else {
        document.getElementById("emailError").style.display = "none";
    }

    // Verifica si la contraseña tiene al menos 8 caracteres
    if (password.length < 8) {
        document.getElementById("passwordError").style.display = "block";
        return false;
    } else {
        document.getElementById("passwordError").style.display = "none";
    }

    // Si llega aquí, la validación es exitosa
    return true;
}
// navegador
document.addEventListener("DOMContentLoaded", function() {
    fetch("nav.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("navbar-container").innerHTML = data;
        });
});

