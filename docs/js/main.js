$(function () {
  $('.header__slider').slick({
    arrows: false,
    slidesToShow: 3,
    infinite: true,
    draggable: false,
  })

  $('.header__slider-prev').on('click', function (e) {
    e.preventDefault()
    $('.header__slider').slick('slickPrev')
  })
  $('.header__slider-next').on('click', function (e) {
    e.preventDefault()
    $('.header__slider').slick('slickNext')
  })

  $('.faq__link').on('click', function (e) {
    e.preventDefault()
    if ($(this).hasClass('faq__link--active')) {
      $(this).removeClass('faq__link--active')
      $(this).children('.faq__text').slideUp()
    } else {
      $('.faq__link').removeClass('faq__link--active')
      $('.faq__text').slideUp()
      $(this).addClass('faq__link--active')
      $(this).children('.faq__text').slideDown()
    }
  })

  $('.btn__more').on('click', function (e) {
    e.preventDefault()
    $('.popup').addClass('popup--active')
    $('.servic__inner').addClass('servic__inner--active')
    $('body').toggleClass('no__scrol')
  })
  $('.popup__close, .popup__overlay').on('click', function (e) {
    e.preventDefault()
    $('.popup').removeClass('popup--active')
    $('body').toggleClass('no__scrol')
    $('.servic__inner').removeClass('servic__inner--active')
    $('.applic__inner').removeClass('applic__inner--active')
    $('.search__inner').removeClass('search__inner--active')
    $('.popup__confirming').removeClass('popup__confirming--active')
    $('.popup__body').removeClass('popup__body--applic')
    $('.popup__body').removeClass('popup__body--confirming')
    $('.popup__body').removeClass('popup__body--search')
  })
  $('.servic__btn').on('click', function (e) {
    e.preventDefault()
    $('.servic__inner').removeClass('servic__inner--active')
    $('.popup__confirming').addClass('popup__confirming--active')
  })
  $('.popup__confirming-btn').on('click', function (e) {
    e.preventDefault()
    $('.popup').removeClass('popup--active')
    $('body').toggleClass('no__scrol')
    $('.popup__confirming').removeClass('popup__confirming--active')
    $('.popup__body').removeClass('popup__body--applic')
    $('.popup__body').removeClass('popup__body--confirming')
  })
  $('.application__btn').on('click', function (e) {
    e.preventDefault()
    $('.popup').addClass('popup--active')
    $('body').toggleClass('no__scrol')
    $('.popup__body').addClass('popup__body--applic')
    $('.applic__inner').addClass('applic__inner--active')
  })
  $('.applic__btn').on('click', function (e) {
    e.preventDefault()
    $('.applic__inner').removeClass('applic__inner--active')
    $('.popup__confirming').addClass('popup__confirming--active')
    $('.popup__body').addClass('popup__body--confirming')
  })
  $('.search').on('click', function (e) {
    e.preventDefault()
    $('.popup').addClass('popup--active')
    $('body').toggleClass('no__scrol')
    $('.popup__body').addClass('popup__body--search')
    $('.search__inner').addClass('search__inner--active')
  })
  $('.search__button').on('click', function (e) {
    e.preventDefault()
    $('.popup').removeClass('popup--active')
    $('body').toggleClass('no__scrol')
    $('.search__inner').removeClass('search__inner--active')
    $('.popup__body').removeClass('popup__body--search')
  })
  $('.footer__catalog-title--slider').on('click', function () {
    $(this).next().slideToggle('')
  })
  $('.burger, .overlay').on('click', function (e) {
    e.preventDefault()
    $('.burger').toggleClass('burger--active')
    $('.overlay').toggleClass('overlay--active')
    $('.header__nav-list').toggleClass('header__nav-list--open')
    $('body').toggleClass('no__scrol')
    if ($('.burger').hasClass('burger--scroll')){
      $('.burger').toggleClass('burger--scrollwhite')
    }
  })


  const rangeSlider = document.getElementById('range-slider');

  if (rangeSlider) {
    noUiSlider.create(rangeSlider, {
      start: [0, 150000],
      connect: true,
      tooltips: true,
      format: wNumb({
        decimals: 0,
        suffix: ' ₽'
      }),
      step: 1,
      range: {
        'min': 1,
        'max': 150000
      }
    });


    const header = document.querySelector('.header');
    const menu = document.querySelector('.menu__fixed');
    const burger = document.querySelector('.burger');
    const headerHeight = header.offsetHeight;
    const menuHeight = menu.offsetHeight;

    window.addEventListener('scroll', () => {
      let scrollDistance = window.scrollY;

      if (scrollDistance >= headerHeight) {
        burger.classList.add('burger--scroll');
        menu.classList.add('menu__fixed--active');
        header.style.marginTop = `${menuHeight}px`;
      } else {
        burger.classList.remove('burger--scroll');
        menu.classList.remove('menu__fixed--active');
        header.style.marginTop = null;
      }
    })
  }
})