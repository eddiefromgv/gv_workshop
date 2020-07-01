$(function () {
  $(window).scroll(function () {
    var winHeight = $(window);
    if (winHeight.scrollTop() >= 100) {
      $("#main-nav").addClass("scrolled-nav");
    } else {
      $("#main-nav").removeClass("scrolled-nav");
    }

    if (winHeight.scrollTop() >= 2000) {
      $(".modal").addClass("modal-visible");
    }
  });

  $(".close").on("click", function () {
    $(".modal").removeClass("modal-visible");
  });
  $('[data-dismiss="modal"]').on("click", function () {
    $(".modal").removeClass("modal-visible");
  });
  $("#about-event h2.about").on("click", function () {
    $(this).addClass("active-header");
    $("ul.about").show();
    $("ul.what").hide();
    $("h2.what").removeClass("active-header");
  });

  $("#about-event h2.what").on("click", function () {
    $(this).addClass("active-header");
    $("ul.what").show();
    $("ul.about").hide();
    $("h2.about").removeClass("active-header");
  });

  function hilightProperH2(aboutH2, whatH2) {
    if ($("ul.what:visible")) {
      aboutH2.addClass("active-header");
    } else {
      whatH2.addClass("active-header");
    }
  }

  hilightProperH2($("h2.about"), $("h2.what"));
  console.log($(".schedule-cart:first-of-type").attr("cart-number"));

  let cartNumber = $(this).attr("card-number");
  let subjects = $(".inside-subject");
  console.log(subjects);

  $(".schedule-cart").on("click", function () {
    if (!$(this).hasClass("active-schedule-cart")) {
      $(this).addClass("active-schedule-cart");
    } else {
      $(this).removeClass("active-schedule-cart");
    }
  });
});
