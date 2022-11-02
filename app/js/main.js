$(function () {

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