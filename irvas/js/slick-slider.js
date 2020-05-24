/*=========== slider ===========*/
$(window).width(function () {
  if ($(window).width() < 481) {
    $(document).ready(function () {
      $('#filters').slick({
        dots: true,
        arrows: false,
        infinite: true,
        slidesToShow: 2
      });
    });
  } else if ($(window).width() < 570) {
    $(document).ready(function () {
      $('#filters').slick({
        dots: true,
        arrows: false,
        infinite: true,
        slidesToShow: 3
      });
    });
  }
});
