
  $(document).ready(function(){
    // Selecciona el botón de hamburguesa
    var $hamburger = $('.hamburger-menu');

    // Cuando se hace clic en el botón de hamburguesa
    $hamburger.on('click', function() {
      // Activa la clase 'change' para animar el botón
      $hamburger.toggleClass('change');
      
      // Muestra u oculta el menú
      $('.menu').toggleClass('show');
    });
  });

  $(document).ready(function(){
    $(window).scroll(function() { // Detecta el evento de scroll
      if ($(this).scrollTop() > 50) { // Si el scroll es mayor a 50px desde la parte superior
        $('.navbar').addClass('scroll'); // Agrega la clase 'scroll' al navbar
      } else {
        $('.navbar').removeClass('scroll'); // Remueve la clase 'scroll' si el scroll es menor o igual a 50px
      }
    });
  });