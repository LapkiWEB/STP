$(function () {

  $('.menu__btn').on('click', (function () {
    if (!$('.menu').hasClass('active')) {
      $('.menu').addClass('active');
      $('.menu__btn').addClass('active');
    } else {
      $('.menu').removeClass('active');
      $('.menu__btn').removeClass('active');
    }
  }));

  $('.menu__list-hover').on('click', (function () {
    $(this).find('.sub-menu').show(00);
    $(this).siblings().find('.sub-menu').hide(00);

  }));

})