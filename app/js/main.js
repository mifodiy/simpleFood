$(function () {

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
  }else{
    sliderOn.classList.remove('restaurants__slider');
  }

  $('.reviews__slider').slick({
    dots:true,
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
    dots:true,
    arrows: false,
    infinite: false,
  })

  var mixer = mixitup('.categories__list');
  mixer.filter('.burger');
})