
$(document).ready(function(){
// Selecciona el botón de hamburguesa
    var $hamburger = $(".hamburger-menu");

 // Cuando se hace clic en el botón de hamburguesa
$hamburger.on("click", function() {

// Activa la clase "change" para animar el botón
$hamburger.toggleClass("change");
      
// Muestra u oculta el menú
$(".menu").toggleClass("show");
  });
});

$(document).ready(function(){
  $(window).scroll(function() { // Detecta el evento de scroll
    if ($(this).scrollTop() > 50) { // Si el scroll es mayor a 50px desde la parte superior
      $(".navbar").addClass("scroll"); // Agrega la clase "scroll" al navbar
    } else {
      $(".navbar").removeClass("scroll"); // Remueve la clase "scroll" si el scroll es menor o igual a 50px
    }
  });
});


// Validaciones formulario de contacto

document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault();

  // Obtencion de los valores del formulario
  const nombre = document.getElementById("nombre").value;
  const email = document.getElementById("email").value;
  const telefono = document.getElementById("telefono").value;
  const localidad = document.getElementById("localidad").value;
  const mensaje = document.getElementById("mensaje").value;
  document.getElementById("nombre").removeAttribute("");


  // Validación de email
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
      alert("Por favor, ingresa un correo electrónico válido.");
      return;
  }

  // Validación de teléfono
  const telefonoPattern = /^[0-9]{10}$/;
  if (!telefonoPattern.test(telefono)) {
      alert("Por favor, ingresa un número de teléfono válido (10 dígitos).");
      return;
  }

  // Validar que todos los campos están llenos
  if (!nombre || !email || !telefono || !localidad) {
      alert("Por favor, completa todos los campos.");
      return;
  }

  // Si todo está bien, enviar el formulario
  this.submit();
});
