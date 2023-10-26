//Mensaje de bienvenida para pedir al usuario

let nombre = prompt("Hola: por favor dime cómo te llamas");


// Función con bucle para evitar meter en un arreglo la suma de la secuencia hasta 30
function calcularFibonacci() {

    // leer el dom para extraer los campos de referencia
            const numeroInput = document.getElementById("numeroInput");
            const resultado = document.getElementById("resultado");

            const numero = parseInt(numeroInput.value);


            // bucle condicional que compara si hay caracteres, si es menor a 0 o mayor a 30

            if (isNaN(numero) || numero < 0 || numero > 30) {
                resultado.textContent = nombre + ", por favor, ingresa un número válido y positivo.";
                return;
            }

            // operador con indice de dos posiciones para tener en cuenta la suma de campos en orden consecutivo


            const fibonacci = [0, 1];
            let i = 2;

            // condicional para realizar operacion según número registrado
            while (i < numero) {
                const sumaNumero = fibonacci[i - 1] + fibonacci[i - 2];
                fibonacci.push(sumaNumero);
                i++;
            }
            // mensaje de salida con la operación 
            resultado.textContent = nombre + ` El resultado para la serie de Fibonacci en ${numero} números: ${fibonacci.join(", ")}`;
        }