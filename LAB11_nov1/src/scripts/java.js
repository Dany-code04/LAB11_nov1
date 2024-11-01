function calcularNota() {
    let calificacion = document.getElementById("nota").value;
    let mensaje = "";

    calificacion = parseInt(calificacion);

    if (!isNaN(calificacion) && calificacion >= 0 && calificacion <= 100) {
        if (calificacion >= 90) {
            mensaje = "¡Aprobado con honores, felicidades! ";
        } else if (calificacion >= 70) {
            mensaje = "Aprobado, puedes hacerlo mejor";
        } else {
            mensaje = "paila, pongase las pilas";
        }
    } else {
        mensaje = "Por favor ingresa un número válido entre 0 y 100.";
    }

    document.getElementById("resultadoNota").value = mensaje;
}

function verificarNumero() {
    let numero = document.getElementById("numero").value;
    let mensaje = "";


    numero = parseInt(numero);

    if (!isNaN(numero) && numero >= 1 && numero <= 100) {
        if (numero % 2 === 0) {
            mensaje = "Este es un número par";
        } else {
            mensaje = "Este número es impar";
        }
    } else {
        mensaje = "Ingresa un número valido entre 1 y 100";
    }


    document.getElementById("resultadoNumero").value = mensaje;
}

function calcularDescuento() {
    let monto = document.getElementById("monto").value;
    let montoFinal;

    // Convertimos el monto a número flotante
    monto = parseFloat(monto);

    // Verificamos que el monto sea un número válido
    if (!isNaN(monto) && monto >= 0) {
        if (monto > 100) {
            montoFinal = monto * 0.9; // Aplica 10% de descuento
        } else {
            montoFinal = monto; // No aplica descuento
        }
        document.getElementById("montoFinal").value = `Monto final: $${montoFinal.toFixed(2)}`;
    } else {
        document.getElementById("montoFinal").value = "Ingresa un monto válido.";
    }
}

// Función para el juego de adivinanza de un número aleatorio
function jugarAdivinanza() {
    let numeroAleatorio = Math.floor(Math.random() * 10) + 1; // Genera un número aleatorio entre 1 y 10
    let numeroUsuario = parseInt(document.getElementById("adivinanza").value);
    let mensaje;

    // Verificamos que el número ingresado sea válido
    if (!isNaN(numeroUsuario) && numeroUsuario >= 1 && numeroUsuario <= 10) {
        if (numeroUsuario === numeroAleatorio) {
            mensaje = "¡Felicidades, adivinaste el número!";
        } else {
            mensaje = `Lo siento, el número era ${numeroAleatorio}.`;
        }
    } else {
        mensaje = "Ingresa un número válido entre 1 y 10.";
    }

    // Muestra el resultado de la adivinanza
    document.getElementById("resultadoAdivinanza").value = mensaje;
}