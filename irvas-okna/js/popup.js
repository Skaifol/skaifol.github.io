$(document).ready(function() {
  $('.popup-btn').on('click', function (event) {
    event.preventDefault();
    $('.popup').fadeIn();
  });
  $('.popup-close').on('click', function (event) {
    event.preventDefault();
    $('.popup').fadeOut();
  });

  $('.popup-btn2').on('click', function (event) {
    event.preventDefault();
    $('.popup2').fadeIn();
  });
  $('.popup-close').on('click', function (event) {
    event.preventDefault();
    $('.popup2').fadeOut();
  });
  
  $('.popup-btn3').on('click', function (event) {
    event.preventDefault();
    $('.popup3').fadeIn();
  });
  $('.popup-close').on('click', function (event) {
    event.preventDefault();
    $('.popup3').fadeOut();
  });
});