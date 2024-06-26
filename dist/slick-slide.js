$(document).ready(function () {
   $(".hero").slick({
      dots: false,
      arrows: true,
      autoplay: true,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      adaptiveHeight: true,
   });
});

$(document).ready(function () {
   $(".hero-mobile").slick({
      dots: false,
      arrows: false,
      autoplay: true,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      adaptiveHeight: true,
   });
});

$(document).ready(function () {
   $(".standards__container").slick({
      dots: false,
      arrows: false,
      autoplay: true,
      infinite: true,
      speed: 300,
      slidesToShow: 4,
      slidesToScroll: 1,
      adaptiveHeight: true,
      responsive: [
         {
            breakpoint: 1024,
            settings: {
               slidesToShow: 3,
               slidesToScroll: 1,
            },
         },
         {
            breakpoint: 600,
            settings: {
               slidesToShow: 2,
               slidesToScroll: 1,
            },
         },
         {
            breakpoint: 450,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1,
            },
         },
      ],
   });
});

$(document).ready(function () {
   $(".success__carousels").slick({
      dots: false,
      arrows: false,
      autoplay: true,
      infinite: true,
      speed: 3000,
      slidesToShow: 1,
      adaptiveHeight: true,
   });
});

$(document).ready(function () {
   $(".insights__container").slick({
      dots: false,
      arrows: false,
      autoplay: true,
      infinite: true,
      speed: 3000,
      slidesToShow: 1,
      adaptiveHeight: true,
   });
});

// $(document).ready(function () {
//     $('.mm-carousel').slick({
//         dots: false,
//         arrows: false,
//         autoplay: true,
//         infinite: true,
//         speed: 3000,
//         slidesToShow: 1,
//         adaptiveHeight: true
//     });
// });

$(document).ready(function () {
   $(".carousel__container").slick({
      dots: false,
      arrows: false,
      autoplay: true,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      adaptiveHeight: true,
   });
});
