// ex_02_slideBtnBanner.js
(function($){

// console.log( $.fn ); // jQuery 연결확인 및 버전 체크
// slide기능 만들기1

var slide_01 = $('.slide_01');
var s_01_btn  = slide_01.children('.slide_btn');
var s_01_button = s_01_btn.children('button');

var s_01_wrap = slide_01.children('.slide_wrap');
var s_01_Ul   = s_01_wrap.children('ul');
var before_s_01_Li   = s_01_Ul.children('li');


// button 클릭시 해당 요소 파악하기
// 1. 각각의 버튼을 분리하여, 따로따로 처리하는 방법
/*
s_01_btn.children('.next').on('click', function(e){});
s_01_btn.children('.prev').on('click', function(e){});
*/

// 2. 동일한 역할을 하는 버튼을 묶어서 그 기능에따라 처리하도록 하는 방법
var slideN = 0;
s_01_button.on('click', function(e){
  e.preventDefault();
  var it = $(this);
  var itClass = it.attr('class');

  if(itClass === 'next'){
    // 다음버튼 클릭시
    slideN += 1;
     if(slideN >= before_s_01_Li.length -1){ slideN = -1; }
  }else if(itClass === 'prev'){
    // 이전버튼 클릭시
    slideN -= 1;
    if(slideN <= -1){ slideN = before_s_01_Li.length -1; }
  }

  console.log(slideN);
});




// jQuery end-----------------------------
})(jQuery);