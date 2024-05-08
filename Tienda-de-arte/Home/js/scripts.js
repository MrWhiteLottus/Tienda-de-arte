// Iniciar seccion 
function validateForm() {
        var nombre = document.getElementById("username").value;
        var repetir_contraseña = document.getElementById("password-repeat").value;
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

        if (nombre.lenght() < 3 ){
            document.getElementById("error").innerHTML = "Por favor, Elige un nombre más largo"
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
// fin de iniciar seccion

