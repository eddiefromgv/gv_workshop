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

  function checkReservation(button) {
    button.on("click", function () {
      switch ($(this).attr("number")) {
        case "1":
          $(this).attr("value", 1);
          break;
        case "2":
          $(this).attr("value", 2);
          break;
        case "3":
          $(this).attr("value", 3);
          break;
      }
    });
  }
  checkReservation($('[href="#book-a-seat"]:nth-of-type(1)'));
  checkReservation($('[href="#book-a-seat"]:nth-of-type(2)'));
  checkReservation($('[href="#book-a-seat"]:nth-of-type(3)'));

  function countSeats() {
    let availableSeats = parseInt($(".seats").attr("value"));
    let firstPackage = parseInt($("#buy1").attr("value"));
    let secondPackage = parseInt($("#buy2").attr("value"));
    let thirdPackage = parseInt($("#buy3").attr("value"));

    availableSeats =
      availableSeats - (firstPackage + secondPackage + thirdPackage);

    return availableSeats;
  }

  function countAvailableSeats() {
    if (countSeats() == 0 || countSeats() < 0) {
      $(".seats").html(" no available ");
    } else {
      $(".seats").html(countSeats());
      $(".seats").attr("value", countSeats());
    }
  }

  function checkIfPopulated(item) {
    if (item.val().length == 0) {
      item.addClass("error");
      item.attr("placeholder", "Please fill the field");
      return false;
    } else {
      return true;
    }
  }

  function addError(item) {
    item.addClass("error");
  }

  function removeError(item) {
    item.removeClass("error");
  }

  function validateName(inputId) {
    if (inputId.val().length <= 3) {
      addError(inputId);
      $("span.error.name").show().text("Name too short");
      return false;
    } else if (inputId.val().length >= 30) {
      addError(inputId);
      $("span.error.name").show().text("Name too long");
      return false;
    } else {
      $("span.error.name").hide();
      removeError(inputId);
      return true;
    }
  }

  function validateMail(inputId) {
    let pattern = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
    if (!pattern.test(inputId.val())) {
      addError(inputId);
      $("span.error.mail").show().text("Email format is invalid");
      return false;
    } else {
      removeError(inputId);
      $("span.error.mail").hide();
      return true;
    }
  }

  function validatePhone(inputId) {
    if (isNaN(inputId.val())) {
      addError(inputId);
      $("span.error.phone").show().text("Only numbers allowed");
      return false;
    } else if (inputId.val().length != 9) {
      addError(inputId);
      $("span.error.phone").show().text("Number lenght invalid");
      return false;
    } else {
      removeError(inputId);
      $("span.error.phone").hide();
      return true;
    }
  }

  $("#name").on("change", function () {
    validateName($(this));
  });

  $("#mail").on("change", function () {
    validateMail($(this));
  });

  $("#phone").on("change", function () {
    validatePhone($(this));
  });

  function validateForm() {
    $("form").submit(function () {
      checkIfPopulated($("#name"));
      checkIfPopulated($("#phone"));
      checkIfPopulated($("#mail"));
      if (
        !checkIfPopulated($("#name")) ||
        !checkIfPopulated($("#phone")) ||
        !checkIfPopulated($("#mail"))
      ) {
        return false;
      } else {
        countAvailableSeats();
        return true;
      }
    });
  }

  validateForm();
});
