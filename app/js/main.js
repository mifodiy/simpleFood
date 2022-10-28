$(function () {

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
  const sliderOn = document.querySelector('.restaurants__list');

  burger.addEventListener('click', () => {
    mobileMenu.classList.add('side-menu--active');
    bodyLock.classList.add('lock');
  });

  closeMenu.addEventListener('click', () => {
    mobileMenu.classList.remove('side-menu--active');
    bodyLock.classList.remove('lock');
  });

  if (window.matchMedia("(max-width: 767px)").matches) {
    sliderOn.classList.add('restaurants__slider');
  } else {
    sliderOn.classList.remove('restaurants__slider');
  }

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

  $('.restaurants__slider').slick({
    dots: true,
    arrows: false,
    infinite: false,
  })


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

//   var $range = $(".price__range-slider"),
//     $inputFrom = $(".price__input-from"),
//     $inputTo = $(".price__input-to"),
//     instance,
//     min = 0,
//     max = 1000,
//     from = 0,
//     to = 0;

// $range.ionRangeSlider({
// 	skin: "round",
//     type: "double",
//     min: min,
//     max: max,
//     from: 200,
//     to: 800,
//     onStart: updateInputs,
//     onChange: updateInputs
// });
// instance = $range.data("ionRangeSlider");

// function updateInputs (data) {
// 	from = data.from;
//     to = data.to;
    
//     $inputFrom.prop("value", from);
//     $inputTo.prop("value", to);	
// }

// $inputFrom.on("input", function () {
//     var val = $(this).prop("value");
    
//     // validate
//     if (val < min) {
//         val = min;
//     } else if (val > to) {
//         val = to;
//     }
    
//     instance.update({
//         from: val
//     });
// });

// $inputTo.on("input", function () {
//     var val = $(this).prop("value");
    
//     // validate
//     if (val < from) {
//         val = from;
//     } else if (val > max) {
//         val = max;
//     }
    
//     instance.update({
//         to: val
//     });
// });



  var mixer = mixitup('.categories__list');
  mixer.filter('.burger');
})