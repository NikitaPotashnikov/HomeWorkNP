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
})