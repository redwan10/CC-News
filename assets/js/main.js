(function($){
    "use strict";
    // Mobile menu
    jQuery('#mobile-menu-active').meanmenu({
        meanMenuContainer: '.mobile-menu',
        meanScreenWidth: "991"
    });






    // Image Slider
  $('.hero-area-slider').slick({
    dots: false,
    arrows: false,
    prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-long-arrow-alt-left"></i></button>',
    nextArrow: '<button type="button" class="slick-next"><i class="fas fa-long-arrow-alt-right"></i></button>',
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [{
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

  // niceSelect
  $('.select-option').ready(function() {
    $('select').niceSelect();
  });




  // Picture Section Slider
  $('.picture-slider-active').slick({
    dots: false,
    infinite: true,
    arrows: true,
    prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></button>',
    nextArrow: '<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>',
    autoplay: false,
    fade: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [{
        breakpoint: 1500,
        settings: {
          arrows: true,
          dots: false,
          infinite: true,
          autoplay: false,
          fade: false,
          speed: 300,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },{
        breakpoint: 1350,
        settings: {
          arrows: true,
          dots: false,
          infinite: true,
          autoplay: false,
          fade: false,
          speed: 300,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },{
        breakpoint: 992,
        settings: {
          arrows: true,
          dots: false,
          infinite: true,
          autoplay: false,
          fade: false,
          speed: 300,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },{
        breakpoint: 768,
        settings: {
          arrows: true,
          dots: false,
          infinite: true,
          autoplay: false,
          fade: false,
          speed: 300,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });



})(jQuery);







//  var acc = document.getElementsByClassName("dropdown");
//  var i;
//  for (i = 0; i < acc.length; i++) {
//    acc[i].addEventListener("click", function() {
//      this.classList.toggle("active");
//      var panel = this.nextElementSibling;
//      if (panel.style.display === "block") {
//        panel.style.display = "none";
//      } else {
//        panel.style.display = "block";
//      };
//    });
//  }


window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}


