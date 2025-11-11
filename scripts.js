alert("¡Bienvenido a la prueba JavaScript!");

// Pedimos nombre y apellido
let nombreCompleto = prompt("Por favor, ingrese su nombre y apellido:");

// Mostramos bienvenida con nombre ingresado
alert(`¡Bienvenido/a, ${PedroChaparro}!`);

// Mostramos en el título principal
document.querySelector("#titulo").textContent = "¡Bienvenido/a a la Página Principal!";

// Mostramos el nombre ingresado en la página
document.querySelector("#mostrarNombre").textContent = `Usuario: ${nombreCompleto}`;
