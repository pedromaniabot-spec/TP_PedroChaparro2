// Mostrar título de la página
document.querySelector("#titulo3").textContent = "Operaciones Interactivas";

// Función para calcular según el tipo de operación
function calcular(tipo) {
    let num1 = parseFloat(prompt("Ingrese el primer número:"));
    let num2 = parseFloat(prompt("Ingrese el segundo número:"));
    let resultado;

    if (isNaN(num1) || isNaN(num2)) {
        alert("Por favor ingrese valores numéricos válidos.");
        return;
    }

    switch(tipo) {
        case 'suma':
            resultado = num1 + num2;
            alert(`El resultado de la suma es: ${resultado}`);
            break;
        case 'division':
            if (num2 === 0) {
                alert("No se puede dividir entre 0");
            } else {
                resultado = num1 / num2;
                alert(`El resultado de la división es: ${resultado}`);
            }
            break;
        case 'promedio':
            resultado = (num1 + num2) / 2;
            alert(`El promedio es: ${resultado}`);
            break;
        default:
            alert("Operación no válida");
    }
}

