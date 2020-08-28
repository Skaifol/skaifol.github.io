$(document).ready(function () {
  $('.burger_menu').click(function (event) {
    $('.burger_menu, .nav, .mail, .body-icon').toggleClass('active');
    $('body').toggleClass('lock');
  })
});
$(window).width(function () {
  if ($(window).width() < 1472) {
    $('.fotorama').fotorama({
      height: 625
    })
  } 
  if ($(window).width() < 1186) {
    $('.fotorama').fotorama({
      height: 500,
      nav: 'dots',
      arrows: false
    })
  }
  if ($(window).width() < 940) {
    $('.fotorama').fotorama({
      nav: 'dots',
      arrows : false
    })
  }
  if ($(window).width() < 520) {
    $('.fotorama').fotorama({
      height: 400
    })
  }
});
