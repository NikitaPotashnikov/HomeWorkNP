$(function () {
  

  $('.dropdown-btn').on('click', function (e) {
    e.preventDefault()
    $(this).next().slideToggle('')
  })
  
  $('.faq__acc-link').on('click', function (e) {
    e.preventDefault()
    if ($(this).hasClass('faq__acc-link--active')) {
      $(this).removeClass('faq__acc-link--active')
      $(this).children('.faq__acc-text').slideUp()
    } else {
      $('.faq__acc-link').removeClass('faq__acc-link--active')
      $('.faq__acc-text').slideUp()
      $(this).addClass('faq__acc-link--active')
      $(this).children('.faq__acc-text').slideDown()
    }
  })
  
  $('.launch__app, .launch__close, .overlay__launch').on('click', function (e) {
    e.preventDefault()
    $('.popup__launch').toggleClass('open')
    $('body').toggleClass('no__scrol')
  })

  $('.connect__country, .connection__close, .overlay__connection').on('click', function (e) {
    e.preventDefault()
    $('.popup__connection').toggleClass('open')
    $('body').toggleClass('no__scrol')
  })

  $('.connection__button').on('click', function(e){
    e.preventDefault()
    $('.popup__connection').removeClass('open')
    $('.popup__confirmation').toggleClass('open')
  })

  $('.confirmation__close, .overlay__confirmation, .confirmation__link').on('click', function (e) {
    e.preventDefault()
    $('.popup__confirmation').toggleClass('open')
    $('body').removeClass('no__scrol')
  })
  $('.burger, .overlay').on('click', function (e) {
    e.preventDefault()
    $('.header__nav ').toggleClass('header__nav--open')
    $('.overlay').toggleClass('overlay--show')
  })

  $('.header__nav a').on('click', function (e) {
    if ($(window).width() <= 320) {
      $('.header__nav ').toggleClass('header__nav--open')
      $('.overlay').toggleClass('overlay--show')
    }
  })

  $('.countries__button').on('click', function (e) {
    $('.countries__item').removeClass('russia--active')
    $('.map').removeClass('map__russia--active')
    $('.countries__item').removeClass('countries__item--active')
    $('.map').removeClass('map--active')
    if ($(this).hasClass('russia') && $('.map').hasClass('russia')) {
      $(this).closest('.countries__item').addClass('countries__item--active')
      $('.russia').addClass('map--active')
    }
    if ($(this).hasClass('ukraine') && $('.map').hasClass('ukraine')) {
      $(this).closest('.countries__item').addClass('countries__item--active')
      $('.ukraine').addClass('map--active')
    }
    if ($(this).hasClass('turkey') && $('.map').hasClass('turkey')) {
      $(this).closest('.countries__item').addClass('countries__item--active')
      $('.turkey').addClass('map--active')
    }
    if ($(this).hasClass('kazakhstan') && $('.map').hasClass('kazakhstan')) {
      $(this).closest('.countries__item').addClass('countries__item--active')
      $('.kazakhstan').addClass('map--active')
    }
    if ($(this).hasClass('belarus') && $('.map').hasClass('belarus')) {
      $(this).closest('.countries__item').addClass('countries__item--active')
      $('.belarus').addClass('map--active')
    }
  })

  
  var width = $(window).width()

  if (width <= 320) {
    $('.countries__list').slick({
      slidesToShow: 2,
      slidesToScroll: 1,
      arrows: false,
      swipeToSlide: true
    })
  } 

})