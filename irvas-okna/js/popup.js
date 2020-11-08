$(document).ready(function() {
  $('.popup-btn').on('click', function (event) {
    event.preventDefault();
    $('.popup').fadeIn();
    $('body').toggleClass('lock');
  });
  $('.popup-close').on('click', function (event) {
    event.preventDefault();
    $('.popup').fadeOut();
    $('body').removeClass('lock');
  });

  $('.popup-btn2').on('click', function (event) {
    event.preventDefault();
    $('.popup2').fadeIn();
    $('body').toggleClass('lock');
  });
  $('.popup-close').on('click', function (event) {
    event.preventDefault();
    $('.popup2').fadeOut();
    $('body').removeClass('lock');
  });
  
  $('.popup-btn3').on('click', function (event) {
    event.preventDefault();
    $('.popup3').fadeIn();
    $('body').toggleClass('lock');
  });
  $('.popup-close').on('click', function (event) {
    event.preventDefault();
    $('.popup3').fadeOut();
    $('body').removeClass('lock');
  });
});
