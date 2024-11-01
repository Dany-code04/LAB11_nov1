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

    monto = parseFloat(monto);

    if (!isNaN(monto) && monto >= 0) {
        if (monto > 100) {
            montoFinal = monto * 0.9; 
        } else {
            montoFinal = monto; 
        }
        document.getElementById("montoFinal").value = `Monto final: $${montoFinal.toFixed(2)}`;
    } else {
        document.getElementById("montoFinal").value = "Ingresa un monto válido.";
    }
}

function jugarAdivinanza() {
    let numeroAleatorio = Math.floor(Math.random() * 10) + 1; 
    let numeroUsuario = parseInt(document.getElementById("adivinanza").value);
    let mensaje;

    if (!isNaN(numeroUsuario) && numeroUsuario >= 1 && numeroUsuario <= 10) {
        if (numeroUsuario === numeroAleatorio) {
            mensaje = "¡Felicidades, adivinaste el número!";
        } else {
            mensaje = `Lo siento, el número era ${numeroAleatorio}.`;
        }
    } else {
        mensaje = "Ingresa un número válido entre 1 y 10.";
    }

    document.getElementById("resultadoAdivinanza").value = mensaje;
}