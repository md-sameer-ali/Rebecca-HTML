jQuery(document).ready(function ($) {
     // Select li elements that have ul as children
  $('.nav-ul li:has(ul)').each(function () {
    // Append a div to their child a tags
    $(this).children('a').append('<span class="dropdown-arrow"><i class="fa-solid fa-chevron-down"></i></span>');
  });


  if ($(window).width() <= 991) {
    $(".nav-ul .dropdown-arrow").on("click", function (e) {
      e.preventDefault();
      if ($(this).parent().hasClass("active")) {
        $(this).parent().removeClass("active");
        $(this)
          .parent().siblings(".sub-menu")
          .slideUp(200);
      } else {
        $(".nav-ul .dropdown-arrow").parent().removeClass("active");
        $(this).parent().addClass("active");
        $(".sub-menu").slideUp(200);
        $(this)
          .parent().siblings(".sub-menu")
          .slideDown(200);
      }
    });
  }

  $(".menu-bar").on('click', function () {
    $(".nav-area-main .nav-area").addClass("mobi-nav-active");
    $(".black_overlay_for_mobile_responsive").fadeIn();
  });
  $(".cross").on('click', function () {
    $(".nav-area-main .nav-area").removeClass("mobi-nav-active");
    $(".black_overlay_for_mobile_responsive").fadeOut(1000);
  });
  $(".black_overlay_for_mobile_responsive").on('click', function () {
    $(".nav-area-main .nav-area").removeClass("mobi-nav-active");
    $(this).fadeOut(1000);
  });

  const contentSwiper = new Swiper(".contentSwiper", {
    slidesPerView: 2,
    spaceBetween: 55,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      1199: {
        slidesPerView: 2,
        spaceBetween: 60,
      },
      991: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      320: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
    },
  });

});