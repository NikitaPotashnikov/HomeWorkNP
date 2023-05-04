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
})