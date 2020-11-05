// monfee_viewBox.js


// var count = 0;
// setTimeout(function(){},시간);
// setInterval(functino(){},시간);
// clearInterval(setInterval함수이름);

// var Go = setInterval(function(){
//   count += 1;
//   console.log(count);
//   if(count > 20){
//     clearInterval( Go );
//   }
// },1000);



(function($){
/*
  var count = 0;
  var Start;
  var MyCount = function(){
    Start = setInterval(function(){
      count += 1;
      console.log( count );
    }, 500);
  };

  MyCount();

  $('h1').on('mouseenter', function(){
    clearInterval( Start );
  });
  $('h1').on('mouseleave', function(){
    // count = 0;
    MyCount();
  });
*/

  var viewBox = $('#viewBox');
  viewBox.css({'overflow':'hidden'});
  var backImg = viewBox.find('.back_image');
  var backLi  = backImg.find('li');
  var permission = true; 

  // 순서를 언급시에는 eq()메소드를 사용 0~...., -1,-2....fa-js
  // 복제의 기능은 clone()  -> 복제된기능을 원본처럼 수행하게하려면 true 매개변수를 입력
  // console.log(backLi);

  var indicator = viewBox.find('.slide_indicator');
  var indiLi    = indicator.find('li');

  // 마지막요소 복제에의한 내용변경
  var backLiLast = backLi.eq(-1).clone(); // 마지막복제
  backImg.prepend(backLiLast); // 복제요소 앞에 추가
  var reBackLi = backImg.find('li'); // 복제 후 갯수 재파악
  backImg.css({ 'marginLeft':-100 + '%' , 'width': (reBackLi.length * 100) + '%'}); // 크기변경
  reBackLi.css({'width': (100 / reBackLi.length) + '%' }); // 내부요소 크기변경

  // 슬라이드 버튼
  var slideBtn = viewBox.find('.slide_btn');
  var nextSlideBtn = slideBtn.children('button').eq(0); // next버튼
  var prevSlideBtn = slideBtn.children('button').eq(1); // prev버튼
  // console.log(nextSlideBtn , prevSlideBtn);
  var slideN = 0;
  nextSlideBtn.on('click', function(e){
    // a, button 요소처럼 이벤트기능이 이미 내장된 요소는 미리 해당기능을 제거할 필요가 있다.
    e.preventDefault();
    if(permission){
      permission = false;

      slideN += 1;
      // if(){}else{}
      // 콜백함수
      backImg.stop().animate({'left':slideN * -100 + '%'}, function(){
        if(slideN >= backLi.length-1){
          slideN = -1;
          backImg.stop().css({'left':slideN * -100 + '%'});
        }
       setTimeout(function(){
        permission=true;
       }, 1000);
      });
      indiLi.eq(slideN).siblings().removeClass('action');
      indiLi.eq(slideN).addClass('action');
    }
  });

  prevSlideBtn.on('click', function(e){
    e.preventDefault();
    if( permission ){
      permission = false;
      slideN -= 1;
      backImg.stop().animate({'left':slideN * -100 + '%'}, function(){
        if(slideN <= -1){
          slideN = backLi.length-1;
          backImg.stop().css({'left':slideN * -100 + '%'});
          }
          setTimeout(function(){ permission=true; }, 1000);
      });
      indiLi.eq(slideN).siblings().removeClass('action');
      indiLi.eq(slideN).addClass('action');
    }
  });
// ---------------------------
indiLi.on('click', function(e){
  e.preventDefault();
  var its = $(this);
  slideN = its.index();
  // console.log(itsI);
  backImg.stop().animate({'left': slideN * -100 + '%'});
  // indiLi.removeClass('action');
  indiLi.eq(slideN).siblings().removeClass('action');
  indiLi.eq(slideN).addClass('action');
});
//--------------------------------
indiLi.children('a').on('focus', function(e){
  e.preventDefault();
  var its = $(this);
  slideN = its.parent().index();
  backImg.stop().animate({'left': slideN * -100 + '%'});
  indiLi.eq(slideN).siblings().removeClass('action');
  indiLi.eq(slideN).addClass('action');
});
})(jQuery);


/** jQuery 선택자
  * #box  ->  $('#box');
  * .box  ->  $('.box');
  * ul>li ->  $('ul>li');  ->  $('ul').children('li');
  * ul li ->  $('ul li');  ->  $('ul').find('li');
  * dt+dd ->  $('dt+dd');  ->  $('dt').next('dd'); 
  * dt~dd ->  $('dt~dd');  ->  $('dt').nextAll('dd');
  * 이전형제선택           ->  $('dt').prev('dd');
  * 이전형제모두           ->  $('dt').prevAll('dd');
  * 자신을 제외한 형제     ->  $('dt').siblings('dd');
  * 부모형제를 선택        ->  $('dt').parent('dl');   $('dt').parentUntil('body');
//-----------------------------------------------------------------------------------
  ** css
  // 선택자.style.backgroundColor = '#acf';
  // 선택자.style = 'backgroundColor:#fca; color:#fff';
  선택자.css({'속성명':'속성값' , '속성명':'속성값' ....});
*/
/*
  var reFn = function(i){
    i += 1;
    console.log(i);
    if(i < 20){    reFn(i);  } else { console.log( '20이 되었습니다.' ); }
  }
  reFn(1);
*/

/* jQuery 에서 콜백함수란?

  하나의 메소드(함수)를 수행한 후에, 다시 함수를 수행할 수 있도록 처리하는 형태
  단, animation 기능을 가진 메소드 내 및 이벤트에서만 콜백함수의 기능을 가질 수 있다.

  선택자.on('click', function(){
    선택자.animate({기능수행}, function(){})
  })
  */

