(function($){
    "use strict";


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