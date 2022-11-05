$(function () {

//     // Initialise Carousel
// const myCarousel = new Carousel(document.querySelector(".product__gallery"), {
//   preload: 2,
// });

// // Customize Fancybox
// Fancybox.bind('[data-fancybox="gallery"]', {
//   Thumbs: false,
//   Toolbar: false,

//   closeButton: "top",

//   Carousel: {
//     Dots: true,
//     on: {
//       change: (that) => {
//         myCarousel.slideTo(myCarousel.findPageForSlide(that.page), {
//           friction: 0,
//         });
//       },
//     },
//   },
// });

// // Initialise Carousel
// const myCarousel = new Carousel(document.querySelector("#myCarousel"), {
//   preload: 2,
// });

// // Customize Fancybox
// Fancybox.bind('[data-fancybox="gallery"]', {
//   Thumbs: false,
//   Toolbar: false,

//   closeButton: "top",

//   Carousel: {
//     Dots: true,
//     on: {
//       change: (that) => {
//         myCarousel.slideTo(myCarousel.findPageForSlide(that.page), {
//           friction: 0,
//         });
//       },
//     },
//   },
// });

// // Initialise Carousel
// const myCarousel = new Carousel(document.querySelector(".product__gallery"), {
//   preload: 2,
// });

// // Customize Fancybox
// Fancybox.bind('[data-fancybox="gallery"]', {
//   Thumbs: false,
//   Toolbar: false,

//   closeButton: "top",

//   Carousel: {
//     Dots: true,
//     on: {
//       change: (that) => {
//         myCarousel.slideTo(myCarousel.findPageForSlide(that.page), {
//           friction: 0,
//         });
//       },
//     },
//   },
// });

$(".product__rating").rateYo({
  starWidth: "16px",
  normalFill: "rgba(193, 193, 193, 0.3)",
  ratedFill: "#FFB800",
  "starSvg": `<svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
  <g clip-path="url(#clip0_3197_367)">
  <path d="M0.0229731 6.16432C0.0780973 5.9946 0.224753 5.87091 0.401315 5.84529L5.36139 5.12451L7.57966 0.629933C7.6586 0.469933 7.82157 0.368652 7.99997 0.368652C8.17841 0.368652 8.34135 0.469933 8.42032 0.629933L10.6387 5.12451L15.5987 5.84529C15.7752 5.87091 15.9219 5.9946 15.977 6.16429C16.0322 6.334 15.9862 6.52028 15.8584 6.64481L12.2694 10.1434L13.1165 15.0834C13.1467 15.2593 13.0744 15.437 12.9301 15.5419C12.8484 15.6012 12.7517 15.6314 12.6545 15.6314C12.5799 15.6314 12.505 15.6136 12.4365 15.5776L8 13.2451L3.56374 15.5775C3.40577 15.6606 3.21443 15.6467 3.07009 15.5419C2.92574 15.437 2.8534 15.2593 2.88356 15.0834L3.73096 10.1434L0.141566 6.64478C0.0138168 6.52028 -0.0322151 6.334 0.0229731 6.16432Z"/>
  </g>
  <defs>
  <clipPath id="clip0_3197_367">
  <rect width="16" height="16" transform="matrix(-1 0 0 1 16 0)"/>
  </clipPath>
  </defs>
  </svg>`
});

   var header = $(".header");
  var scrollChange = 50;
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();

    if (scroll >= scrollChange) {
      header.addClass('sticky');
    } else {
      header.removeClass("sticky");
    }
  });

  var $range = $(".price__range-slider"),
    $inputFrom = $(".price__input--from"),
    $inputTo = $(".price__input--to"),
    instance,
    min = 0,
    max = 1200,
    from = 0,
    to = 0;

$range.ionRangeSlider({
	skin: "round",
    type: "double",
    min: min,
    max: max,
    from: 100,
    to: 1000,
    onStart: updateInputs,
    onChange: updateInputs
});
instance = $range.data("ionRangeSlider");

function updateInputs (data) {
	from = data.from;
    to = data.to;
    
    $inputFrom.prop("value", from);
    $inputTo.prop("value", to);	
}

$inputFrom.on("input", function () {
    var val = $(this).prop("value");
    
    // validate
    if (val < min) {
        val = min;
    } else if (val > to) {
        val = to;
    }
    
    instance.update({
        from: val
    });
});

$inputTo.on("input", function () {
    var val = $(this).prop("value");
    
    // validate
    if (val < from) {
        val = from;
    } else if (val > max) {
        val = max;
    }
    
    instance.update({
        to: val
    });
});



  const burger = document.querySelector('.menu__btn');
  const closeMenu = document.querySelector('.side-menu__btn');
  const mobileMenu = document.querySelector('.side-menu');
  const bodyLock = document.querySelector('body');
  const restSliderOn = document.querySelector('.restaurants__list');
  const promoSliderOn = document.querySelector('.promo__list');
  const sideBarOn = document.querySelector('.catalog__btn');
  const closeSideBar = document.querySelector('.catalog-sidebar__btn');
  const sideBar = document.querySelector('.catalog-sidebar');
  const menuLink = document.querySelector('.menu__link');

  burger.addEventListener('click', () => {
    mobileMenu.classList.add('side-menu--active');
    //bodyLock.classList.add('lock');
  });

  closeMenu.addEventListener('click', () => {
    mobileMenu.classList.remove('side-menu--active');
    //bodyLock.classList.remove('lock');
  });

  sideBarOn.addEventListener('click', () => {
    sideBar.classList.add('catalog-sidebar--active');
    bodyLock.classList.add('lock');
  });

  closeSideBar.addEventListener('click', () => {
    sideBar.classList.remove('catalog-sidebar--active');
    bodyLock.classList.remove('lock');
  });

  $(".menu__link").click(function(e) {
    e.preventDefault();
    $(".menu__link").removeClass('menu__link--active');
    $(this).addClass('menu__link--active');
  })

  

  $('.reviews__slider').slick({
    dots: true,
    prevArrow: `<button type="button" class="slick-prev"><span class="icon-arrow" style="-webkit-mask-image: url('../images/sprite.svg#left-arrow');"></span></button>`,
    nextArrow: `<button type="button" class="slick-next"><span class="icon-arrow" style="-webkit-mask-image: url('../images/sprite.svg#right-arrow');"></span></button>`,
    infinite: false,
    responsive: [
      {
        breakpoint: 561,
        settings: {
          dots: false,
        }
      },
    ]
  })




  
 
  if (window.matchMedia("(max-width: 767px)").matches) {

    if(restSliderOn != null){
      restSliderOn.classList.add('restaurants__slider');
    }

    if(promoSliderOn != null){
      promoSliderOn.classList.add('promo__slider');
    }
    
  } else {

    if(restSliderOn != null){
      restSliderOn.classList.remove('restaurants__slider');
    }

    if(promoSliderOn != null){
      promoSliderOn.classList.remove('promo__slider');
    }

    
  }

  $('.restaurants__slider').slick({
    dots: true,
    arrows: false,
    infinite: false,
  })

  $('.promo__slider').slick({
    dots: true,
    arrows: false,
    infinite: false,
  })
 
  var mixer = mixitup('.categories__list');
  mixer.filter('.burger');
})