// Me gusta siempre personalizar los ejercicios

let nombre = prompt("Hola, por favor dime cómo te llamas: ");


// Iniciar función para leer valores
        function convertirTemperatura() {
            const opcion = document.getElementById("opcion").value;
            const valorTemp = parseFloat(document.getElementById("valorTemp").value);
// Comprobar si es número y no caracter distinto
            if (isNaN(valorTemp)) {
                alert("Por favor, ingresa un valor numérico.");
                return;
            }

            const resultadoTable = document.getElementById("resultado");

            // Validar si la temperatura ya existe en la tabla
            for (let i = 0; i < resultadoTable.rows.length; i++) {
                if (resultadoTable.rows[i].cells[0].textContent === `${valorTemp} ${opcion}`) {
                    alert("Esta temperatura ya ha sido convertida.");
                    return;
                }
            }
// Escribir resultado de acuerdo a la operación
            const row = resultadoTable.insertRow(-1);

            let celsius, fahrenheit, kelvin;

            if (opcion === "celsius") {
                celsius = valorTemp;
                fahrenheit = (celsius * 9/5) + 32;
                kelvin = celsius + 273.15;
            } else if (opcion === "fahrenheit") {
                fahrenheit = valorTemp;
                celsius = (fahrenheit - 32) * 5/9;
                kelvin = (fahrenheit - 32) * 5/9 + 273.15;
            } else if (opcion === "kelvin") {
                kelvin = valorTemp;
                celsius = kelvin - 273.15;
                fahrenheit = (kelvin - 273.15) * 9/5 + 32;
            }
// Resultado en tabla
            row.innerHTML = `
                <td>${valorTemp} ${opcion}</td>
                <td>${celsius.toFixed(2)} °C</td>
                <td>${fahrenheit.toFixed(2)} °F</td>
                <td>${kelvin.toFixed(2)} K</td>
            `;

            mensaje.textContent = nombre + " el resultado de tu conversión es: "; 
        }