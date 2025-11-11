// Mensaje de bienvenida inicial
alert("¡Bienvenido a la prueba JavaScript!");

// Pedimos nombre y apellido
let nombreCompleto = prompt("Por favor, ingrese su nombre y apellido:");

// Mostramos una alerta personalizada con el nombre
alert(`¡Bienvenido/a, ${nombreCompleto}!`);

// Mostramos el nombre en el título principal de la página
document.querySelector("#titulo").textContent = `¡Bienvenido/a, ${nombreCompleto}!`;

// Mostramos el nombre ingresado también en otra parte de la página
document.querySelector("#mostrarNombre").textContent = `Usuario: ${nombreCompleto}`;
