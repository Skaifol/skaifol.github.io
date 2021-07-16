
$(document).scroll(function () {

  var scrollTop = $(window).scrollTop();
  console.log(scrollTop);
  if (scrollTop >= 5) {
    $('.header__top, .header__button>a, .header__menu, .header__logo').addClass("scrol");
    $("div.header__logo").empty();
    $("div.header__logo").append('<img src="img/scroll-logo.png"/>');
  }else {
    $('.header__top, .header__button>a, .header__menu, .header__logo').removeClass("scrol");
    $("div.header__logo").empty();
    $("div.header__logo").append('<img src="img/logo.png"/>');
  }
});

$(document).ready(function () {
  // $('.parallax__list>li').addClass('layer');
  $('.parallax__list').parallax();
  $(window).width(function () {
    if ($(window).width() < 769) {
      $('.parallax__list>li').removeClass('layer');
    }
  });
  $('.header__burger').click(function (event){
    $('.header__burger, .header__menu').toggleClass('active');
    $('body').toggleClass('lock');
  });
});


const animItems = document.querySelectorAll('.anim_scroll');

if (animItems.length > 0) {
  window.addEventListener('scroll', animOnScroll);
  function animOnScroll() {
    for (let index = 0; index < animItems.length; index++) {
      const animItem = animItems[index];
      const animItemHeight = animItem.offsetHeight;
      const animItemOffset = offset(animItem).top;
      const animStart = 2;

      let animItemPoint = window.innerHeight - animItemHeight / animStart;
      if (animItemHeight > window.innerHeight) {
        animItemPoint = window.innerHeight - window.innerHeight / animStart;
      }

      if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
        animItem.classList.add('active');
        $(function () {
          $('.card__clip-items-1').easyPieChart({
            barColor: '#43a8f6',
            trackColor: '#e8e8e8',
            scaleColor: false,
            lineWidth: 6,
            lineCap: 'circle'
          });
          $('.card__clip-items-2').easyPieChart({
            barColor: '#32b228',
            trackColor: '#e8e8e8',
            scaleColor: false,
            lineWidth: 6,
            lineCap: 'circle'
          });
          $('.card__clip-items-3').easyPieChart({
            barColor: '#d60505',
            trackColor: '#e8e8e8',
            scaleColor: false,
            lineWidth: 6,
            lineCap: 'circle'
          });
        });
      } else {
        animItem.classList.remove('active');
      }
    }
  }
  function offset(el) {
    const rect = el.getBoundingClientRect(),
      scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
      scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
  }
  animOnScroll();
}

const mapIcon = new Vivus(
  'map',
  {
    type: 'oneByOne',
    duration: 300,
    animTimingFunction: Vivus.EASE
  }
);