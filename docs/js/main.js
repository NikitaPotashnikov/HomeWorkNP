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

})