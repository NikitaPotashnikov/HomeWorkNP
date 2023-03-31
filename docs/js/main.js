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

})