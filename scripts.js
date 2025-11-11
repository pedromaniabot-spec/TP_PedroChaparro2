alert("¡Bienvenido a la prueba JavaScript!");

// Pedimos nombre y apellido
let nombreCompleto = prompt("Por favor, ingrese su nombre y apellido:");

// Mostramos bienvenida con nombre ingresado
alert(`¡Bienvenido/a, ${PedroChaparro}!`);

// Mostramos en el título y en la página
document.querySelector("#titulo").textContent = "Página Principal";
document.querySelector("#mostrarNombre").textContent = `Usuario: ${PedroChaparro}`;
