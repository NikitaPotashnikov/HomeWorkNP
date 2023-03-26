$(function () {

  $('.dropdown-btn').on('click', function (e) {
    e.preventDefault()
    $(this).next().slideToggle('')
  })
  

})