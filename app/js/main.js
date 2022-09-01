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


  $("#form").submit(function () {
    $.ajax({
      type: "POST",
      url: "mail.php",
      data: $(this).serialize()
    }).done(function () {
      $(this).find("input").val("");
      alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
      $("#form").trigger("reset");
    });
    return false;
  });


});








const openPopUp1 = document.getElementById('modal1');
const closePopUp1 = document.getElementById('pop_up_close1');
const popUp1 = document.getElementById('pop_up1');

openPopUp1.addEventListener('click', function (e) {
  e.preventDefault();
  popUp1.classList.add('active');  
})

closePopUp1.addEventListener('click', () =>{
  popUp1.classList.remove('active');
})

























const openPopUp2 = document.getElementById('modal2');
const closePopUp2 = document.getElementById('pop_up_close2');
const popUp2 = document.getElementById('pop_up2');

openPopUp2.addEventListener('click', function (e) {
  e.preventDefault();
  popUp2.classList.add('active');
})

closePopUp2.addEventListener('click', () => {
  popUp2.classList.remove('active');
})

const openPopUp3 = document.getElementById('modal3');
const closePopUp3 = document.getElementById('pop_up_close3');
const popUp3 = document.getElementById('pop_up3');

openPopUp3.addEventListener('click', function (e) {
  e.preventDefault();
  popUp3.classList.add('active');
})

closePopUp3.addEventListener('click', () => {
  popUp3.classList.remove('active');
})

const openPopUp4 = document.getElementById('modal4');
const closePopUp4 = document.getElementById('pop_up_close4');
const popUp4 = document.getElementById('pop_up4');

openPopUp4.addEventListener('click', function (e) {
  e.preventDefault();
  popUp4.classList.add('active');
})

closePopUp4.addEventListener('click', () => {
  popUp4.classList.remove('active');
})

const openPopUp5 = document.getElementById('modal5');
const closePopUp5 = document.getElementById('pop_up_close5');
const popUp5 = document.getElementById('pop_up5');

openPopUp5.addEventListener('click', function (e) {
  e.preventDefault();
  popUp5.classList.add('active');
})

closePopUp5.addEventListener('click', () => {
  popUp5.classList.remove('active');
})

const openPopUp6 = document.getElementById('modal6');
const closePopUp6 = document.getElementById('pop_up_close6');
const popUp6 = document.getElementById('pop_up6');

openPopUp6.addEventListener('click', function (e) {
  e.preventDefault();
  popUp6.classList.add('active');
})

closePopUp6.addEventListener('click', () => {
  popUp6.classList.remove('active');
})

const openPopUp7 = document.getElementById('modal7');
const closePopUp7 = document.getElementById('pop_up_close7');
const popUp7 = document.getElementById('pop_up7');

openPopUp7.addEventListener('click', function (e) {
  e.preventDefault();
  popUp7.classList.add('active');
})

closePopUp7.addEventListener('click', () => {
  popUp7.classList.remove('active');
})

const openPopUp8 = document.getElementById('modal8');
const closePopUp8 = document.getElementById('pop_up_close8');
const popUp8 = document.getElementById('pop_up8');

openPopUp8.addEventListener('click', function (e) {
  e.preventDefault();
  popUp8.classList.add('active');
})

closePopUp8.addEventListener('click', () => {
  popUp8.classList.remove('active');
})

const openPopUp9 = document.getElementById('modal9');
const closePopUp9 = document.getElementById('pop_up_close9');
const popUp9 = document.getElementById('pop_up9');

openPopUp9.addEventListener('click', function (e) {
  e.preventDefault();
  popUp9.classList.add('active');
})

closePopUp9.addEventListener('click', () => {
  popUp9.classList.remove('active');
})

const openPopUp10 = document.getElementById('modal10');
const closePopUp10 = document.getElementById('pop_up_close10');
const popUp10 = document.getElementById('pop_up10');

openPopUp10.addEventListener('click', function (e) {
  e.preventDefault();
  popUp10.classList.add('active');
})

closePopUp10.addEventListener('click', () => {
  popUp10.classList.remove('active');
})