function calcularSuma() {
    const numerosInput = document.getElementById("numerosInput").value;
    const numeros = numerosInput.split('+').map(Number);
    let suma = 0;

    if (numeros.length < 2 || numeros.length > 10) {
        document.getElementById("resultadoFor").textContent = "Por favor, ingresa entre 2 y 10 números.";
        return;
    }

    for (let i = 0; i < numeros.length; i++) {
        suma += numeros[i];
    }

    document.getElementById("resultadoFor").textContent = `Suma total: ${suma}`;
}


let numerosIngresados = [];
        
        function agregarNumero() {
            const numero = parseInt(document.getElementById("numeroInput").value);

            if (numero < 0) {
                document.getElementById("resultadoWhile").textContent = "Has ingresado un número negativo. Haz clic en 'Finalizar y Mostrar' para ver los números ingresados.";
                return;
            }

            numerosIngresados.push(numero);
            document.getElementById("numeroInput").value = ""; 
        }

        function mostrarNumeros() {
            document.getElementById("resultadoWhile").textContent = `Números ingresados: ${numerosIngresados.join(", ")}`;
        }


const contrasenaCorrecta = "1234"; 

        function verificarContrasena() {
            const contrasenaIngresada = document.getElementById("contrasenaInput").value;

            if (contrasenaIngresada === contrasenaCorrecta) {
                document.getElementById("resultadoDoWhile").textContent = "¡Contraseña correcta!";
            } else {
                document.getElementById("resultadoDoWhile").textContent = "Contraseña incorrecta. Inténtalo de nuevo.";
            }

            document.getElementById("contrasenaInput").value = ""; 
        }