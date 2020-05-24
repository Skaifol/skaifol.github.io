/*========== mask input ===========*/
$(document).ready(function () {
  $("#phone").mask("+7 (999) 999-99-99");
  $(".phone-2").mask("+7 (999) 999-99-99");
  $("#phone-3").mask("+7 (999) 999-99-99");
});


  const tabLinks = document.querySelectorAll(".tabs a");
  const tabPanels = document.querySelectorAll(".tabs-panel");

  for (let el of tabLinks) {
    el.addEventListener("click", e => {
      e.preventDefault();

      document.querySelector(".tabs li.active").classList.remove("active");
      document.querySelector(".tabs-panel.active").classList.remove("active");

      const parentListItem = el.parentElement;
      parentListItem.classList.add("active");
      const index = [...parentListItem.parentElement.children].indexOf(parentListItem);

      const panel = [...tabPanels].filter(el => el.getAttribute("data-index") == index);
      panel[0].classList.add("active");
    });
  }

(function ($) {
  jQuery.fn.lightTabs = function (options) {

    var createTabs = function () {
      tabs = this;
      i = 0;

      showPage = function (i) {
        $(tabs).children("div").children("div").hide();
        $(tabs).children("div").children("div").eq(i).show();
        $(tabs).children("ul").children("li").removeClass("active");
        $(tabs).children("ul").children("li").eq(i).addClass("active");
      }

      showPage(0);

      $(tabs).children("ul").children("li").each(function (index, element) {
        $(element).attr("data-page", i);
        i++;
      });

      $(tabs).children("ul").children("li").click(function () {
        showPage(parseInt($(this).attr("data-page")));
      });
    };
    return this.each(createTabs);
  };
})(jQuery);
$(document).ready(function () {
  $(".tab").lightTabs();
});



$(document).ready(function () {

  $('.mfp-gallery').magnificPopup({
    type: 'image',
    closeOnContentClick: true,
    closeBtnInside: false,
    fixedContentPos: true,
    mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
    image: {
      verticalFit: true
    },
    zoom: {
      enabled: true,
      duration: 300 // don't foget to change the duration also in CSS
    }
  });



  /* console.clear();


  function CountdownTracker(label, value) {

    var el = document.createElement('span');

    el.className = 'flip-clock__piece';
    el.innerHTML = '<b class="flip-clock__card card"><b class="card__top"></b><b class="card__bottom"></b><b class="card__back"><b class="card__bottom"></b></b></b>' +
      '<span class="flip-clock__slot">' + label + '</span>';

    this.el = el;

    var top = el.querySelector('.card__top'),
      bottom = el.querySelector('.card__bottom'),
      back = el.querySelector('.card__back'),
      backBottom = el.querySelector('.card__back .card__bottom');

    this.update = function (val) {
      val = ('0' + val).slice(-2);
      if (val !== this.currentValue) {

        if (this.currentValue >= 0) {
          back.setAttribute('data-value', this.currentValue);
          bottom.setAttribute('data-value', this.currentValue);
        }
        this.currentValue = val;
        top.innerText = this.currentValue;
        backBottom.setAttribute('data-value', this.currentValue);

        this.el.classList.remove('flip');
        void this.el.offsetWidth;
        this.el.classList.add('flip');
      }
    }

    this.update(value);
  }

  // Calculation adapted from https://www.sitepoint.com/build-javascript-countdown-timer-no-dependencies/

  function getTimeRemaining(endtime) {
    var t = Date.parse(endtime) - Date.parse(new Date());
    return {
      'Total': t,
      'Days': Math.floor(t / (1000 * 60 * 60 * 24)),
      'Hours': Math.floor((t / (1000 * 60 * 60)) % 24),
      'Minutes': Math.floor((t / 1000 / 60) % 60),
      'Seconds': Math.floor((t / 1000) % 60)
    };
  }

  function Clock(countdown, callback) {

    countdown = countdown ? new Date(Date.parse(countdown)) : false;
    callback = callback || function () { };

    var updateFn = countdown ? getTimeRemaining : getTime;

    this.el = document.createElement('div');
    this.el.className = 'flip-clock';

    var trackers = {},
      t = updateFn(countdown),
      key, timeinterval;

    for (key in t) {
      if (key === 'Total') { continue; }
      trackers[key] = new CountdownTracker(key, t[key]);
      this.el.appendChild(trackers[key].el);
    }

    var i = 0;
    function updateClock() {
      timeinterval = requestAnimationFrame(updateClock);

      // throttle so it's not constantly updating the time.
      if (i++ % 10) { return; }

      var t = updateFn(countdown);
      if (t.Total < 0) {
        cancelAnimationFrame(timeinterval);
        for (key in trackers) {
          trackers[key].update(0);
        }
        callback();
        return;
      }

      for (key in trackers) {
        trackers[key].update(t[key]);
      }
    }

    setTimeout(updateClock, 500);
  }

  var deadline = new Date(Date.parse(new Date()) + 12 * 24 * 60 * 60 * 1000);
  var c = new Clock(deadline, function () { alert('countdown complete') });
  document.body.appendChild(c.el);

  var clock = new Clock();
  document.body.appendChild(clock.el); */
});