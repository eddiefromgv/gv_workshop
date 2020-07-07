$(function () {
  $(window).scroll(function () {
    var winHeight = $(window);
    if (winHeight.scrollTop() >= 100) {
      $("#main-nav").addClass("scrolled-nav");
    } else {
      $("#main-nav").removeClass("scrolled-nav");
    }
  });

  $(window).on("load", function () {
    setTimeout(function () {
      $(".modal").addClass("modal-visible");
    }, 3000);
  });

  $(".close").on("click", function () {
    $(".modal").removeClass("modal-visible");
  });
  $('[data-dismiss="modal"]').on("click", function () {
    $(".modal").removeClass("modal-visible");
  });

  function showEvent(firstEvent, secondEvent, firstEventList, secondEventList) {
    firstEvent.on("click", function () {
      $(this).addClass("active-header");
      firstEventList.show();
      secondEventList.hide();
      secondEvent.removeClass("active-header");
      if ($("ul.what:visible")) {
        firstEvent.addClass("active-header");
      } else {
        secondEvent.addClass("active-header");
      }
    });
  }

  showEvent(
    $("#about-event h2.about"),
    $("h2.what"),
    $("ul.about"),
    $("ul.what")
  );
  showEvent(
    $("#about-event h2.what"),
    $("h2.about"),
    $("ul.what"),
    $("ul.about")
  );

  function setToActiveCardNumber(subjectId) {
    subjectId.on("click", function () {
      switch (subjectId.attr("cart-number")) {
        case "1":
          $(this).addClass("active-schedule-cart");
          $('[cart-number]:not([cart-number="1"]').removeClass(
            "active-schedule-cart"
          );
          $(".inside-subject:nth-of-type(1)").attr("active", true);
          $(".subject h5:nth-of-type(1)").addClass("active-header");
          $(".inside-subject:not(.inside-subject:nth-of-type(1))").attr(
            "active",
            false
          );
          $(".subject h5:not(.subject h5:nth-of-type(1))").removeClass(
            "active-header"
          );
          break;
        case "2":
          $(this).addClass("active-schedule-cart");
          $('[cart-number]:not([cart-number="2"]').removeClass(
            "active-schedule-cart"
          );
          $(".inside-subject:nth-of-type(2)").attr("active", true);
          $(".subject h5:nth-of-type(2)").addClass("active-header");
          $(".inside-subject:not(.inside-subject:nth-of-type(2))").attr(
            "active",
            false
          );
          $(".subject h5:not(.subject h5:nth-of-type(2))").removeClass(
            "active-header"
          );
          break;
        case "3":
          $(this).addClass("active-schedule-cart");
          $('[cart-number]:not([cart-number="3"]').removeClass(
            "active-schedule-cart"
          );
          $(".inside-subject:nth-of-type(3)").attr("active", true);
          $(".subject h5:nth-of-type(3)").addClass("active-header");
          $(".inside-subject:not(.inside-subject:nth-of-type(3))").attr(
            "active",
            false
          );
          $(".subject h5:not(.subject h5:nth-of-type(3))").removeClass(
            "active-header"
          );
          break;
        case "4":
          $(this).addClass("active-schedule-cart");
          $('[cart-number]:not([cart-number="4"]').removeClass(
            "active-schedule-cart"
          );
          $(".inside-subject:nth-of-type(4)").attr("active", true);
          $(".subject h5:nth-of-type(4)").addClass("active-header");
          $(".inside-subject:not(.inside-subject:nth-of-type(4))").attr(
            "active",
            false
          );
          $(".subject h5:not(.subject h5:nth-of-type(4))").removeClass(
            "active-header"
          );
          break;
        default:
          $('[subject-number]:not([subject-number="1"]').attr("active", false);
          $(".subject h5").removeClass("active-header");
      }
    });
  }

  setToActiveCardNumber($('[cart-number="1"]'));
  setToActiveCardNumber($('[cart-number="2"]'));
  setToActiveCardNumber($('[cart-number="3"]'));
  setToActiveCardNumber($('[cart-number="4"]'));
});
