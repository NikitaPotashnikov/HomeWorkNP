$(function () {

  var mixer = mixitup('.derections__list')

  $('.derections__filter-btn').on('click', function () {
    $('.derections__filter-btn').removeClass('derections__filter-btn--active')
    $(this).addClass('derections__filter-btn--active')
  })

  $('.team__slider').slick({
    arrows: false,
    slidesToShow: 4,
    infinite: true,
    draggable: false,
    waitForAnimate: false,
    // dots: true,
  })
  $('.team__slider-prev').on('click', function (e) {
    e.preventDefault()
    $('.team__slider').slick('slickPrev')
  })

  $('.team__slider-next').on('click', function (e) {
    e.preventDefault()
    $('.team__slider').slick('slickNext')
  })

  $('.textimonials__slider').slick({
    arrows: false,
    dots: true,
    appendDots: $('.textimonials__dots'),
    waitForAnimate: false,
  })
  $('.textimonials__prev').on('click', function (e) {
    e.preventDefault()
    $('.textimonials__slider').slick('slickPrev')
  })
  $('.textimonials__next').on('click', function (e) {
    e.preventDefault()
    $('.textimonials__slider').slick('slickNext')
  })

  // $('.program__acc-link').on('click', function (e) {
  //   e.preventDefault()
  //   $(this).toggleClass('program__acc-link--active')
  //   $(this).children('.program__acc-text').slideToggle()
  // })

  $('.program__acc-link').on('click', function (e){
    e.preventDefault()
    if ($(this).hasClass('program__acc-link--active')) {
      $(this).removeClass('program__acc-link--active')
      $(this).children('.program__acc-text').slideUp()
    } else {
      $('.program__acc-link').removeClass('program__acc-link--active')
      $('.program__acc-text').slideUp()
      $(this).addClass('program__acc-link--active')
      $(this).children('.program__acc-text').slideDown()
    }
    })

  

})