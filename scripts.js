alert("¡Bienvenido a la prueba JavaScript!");

let nombreCompleto = prompt("Por favor, ingrese su nombre y apellido:");

alert(`¡Bienvenido/a, ${nombreCompleto}!`);

document.querySelector("#titulo").textContent = `¡Bienvenido/a, ${nombreCompleto}!`;
document.querySelector("#mostrarNombre").textContent = `Usuario: ${nombreCompleto}`;
