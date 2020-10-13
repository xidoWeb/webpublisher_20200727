// main.js

// 불러온 jQuery 버전확인
// console.log($.fn.jquery);

// 1. css 문법을이요하여 jQuery 문법으로 수정
// #navBox > ul > li:hover > ol {display: block;}

// #navBox > ul > li > a 에  마우스 올리거나 포커스를 잡을경우 다음기능(function)을 수행
var navLink = $('#navBox > ul > li > a');
navLink.on('mouseenter focus', function(){
  // 마우스올리거나 포커스처리된상태의 a 바로뒤의 ol을 나타나게 만들기
  // 1. 마우스올리거나 포커스처리된상태의 a : $(this)
  navLink.next('ol').hide();
  $(this).next('ol').show();
});

// #navBox에서 마우스를 벗어나면 ol사라지게 만들기
var navBox = $('#navBox');
navBox.on('mouseleave', function(){
  navBox.find('ol').hide();
});


// ------------------------------------------
// .banner_context를 이벤트처리(클릭)하면, 다음기능(function)을 수행
var bannerContext = $('.banner_context');
var modalWin = $('.modal_window');

bannerContext.on('click', function(){
  // .modal_window 를 나타나게 만들기
  modalWin.fadeIn();
});

// .modal_window 자식인 .close버튼을 클릭시, 다음기능을 수행
var closeBtn = modalWin.children('.close');
closeBtn.on('click', function(){
  modalWin.fadeOut();
});




