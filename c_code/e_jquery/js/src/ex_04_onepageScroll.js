// ex_04_onepageScroll.js.js

(function($){
  // jQuery start
  /**
   * 1. 스크롤시 $('#headBox') 상단 고정
   * 1-1. 상단이동버튼 기능추가
   * 2. $('.popup_dp')의 닫기버튼 클릭시 팝업창 삭제
   */

   /** 1번사용시 : offset().top,  scrollTop, on('scroll'), $(window) */
    var win = $(window);
    var headBox = $('#headBox');
    var nav     = $('#navBox');
    var navBtn   = nav.find('li');
    var topBtn = $('.top_move_btn');


    // 브라우저 상단에서 떨어져 있는 양 체크
    var headOffset = headBox.offset().top;
    console.log('offset: ', headOffset );

    // 1-1번 보이지 않았다가, 1000px이동후에 나타나기
    topBtn.hide();

    win.on('scroll', function(e){
      // 스크롤이 이동한 위치값 파악
      var winSt = win.scrollTop();
      console.log(winSt);

      // if( winSt >= headOffset ) {
      //   headBox.css({'position':'fixed', 'top':0, 'zIndex':1500});
      // }else{
      //   headBox.removeAttr('style');
      // }

      (winSt >= headOffset) ?  
        headBox.css({'position':'fixed', 'top':0, 'zIndex':1500}) : 
        headBox.removeAttr('style') ;

      // if( winSt >= 500){
      //   topBtn.stop().fadeIn();
      // }else{
      //   topBtn.stop().fadeOut();
      // }

      (winSt >= 500) ? topBtn.stop().fadeIn() : topBtn.stop().fadeOut();
    }); // win.on('scroll')
// -------------------------------------------------------------------
    topBtn.on('click', ['a'], function(e){
      e.preventDefault();
      var it = $(this).find('a');

      // a요소의 연결된 선택자 파악
      var itAttr = it.attr('href'); 

      // a요소의 href값이 상단에서 떨어져있는 양 체크
      var itOffset = $(itAttr).offset().top; 

      // 브라우저를 이동시켜라(스크롤) -> itOffset의로 파악된 크기만큼
      console.log(itOffset);
      $('html, body').animate({ scrollTop: itOffset });
    });
// ------------------------------------------------
    navBtn.on('click', ['a'], function(e){
      e.preventDefault();
      var it = $(this).find('a');
      var itAttr = it.attr('href'); 
      var itOffset = $(itAttr).offset().top; 
      $('html, body').animate({ scrollTop: itOffset });
    });
// ------------------------------------------------
// 2번기능
var popupDp = $('.popup_dp');
var popupBtn = popupDp.find('button');
popupBtn.on('click', function(e){
  e.preventDefault();
  popupDp.remove();
});


  // jQuery end
})(jQuery);
