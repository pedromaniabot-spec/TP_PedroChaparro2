function sumar() {
  let a = parseFloat(prompt("Ingrese el primer número:"));
  let b = parseFloat(prompt("Ingrese el segundo número:"));
  alert("El resultado de la suma es: " + (a + b));
}

function dividir() {
  let a = parseFloat(prompt("Ingrese el primer número:"));
  let b = parseFloat(prompt("Ingrese el segundo número:"));
  if (b === 0) {
    alert("Error: No se puede dividir entre 0");
  } else {
    alert("El resultado de la división es: " + (a / b));
  }
}

function promedio() {
  let a = parseFloat(prompt("Ingrese el primer número:"));
  let b = parseFloat(prompt("Ingrese el segundo número:"));
  alert("El promedio es: " + ((a + b) / 2));
}
