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
     if (!$('.sub-menu').hasClass('active')) {
       $('.sub-menu').addClass('active');
      //  $('.menu__list-hover').addClass('active');
     } else {
       $('.sub-menu').removeClass('active');
      //  $('.menu__list-hover').removeClass('active');
     }
   }));

  

})