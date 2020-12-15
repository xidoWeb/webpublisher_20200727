// ex_13.landing.js
(function($){

  var win = $(window);
  var conBox = $('#conBox');
  var moreBox = $('#moreBox');

  var winH = win.outerHeight() / 4 * 3;

  var conBoxOffset = conBox.offset().top;
  var moreBoxOffset = moreBox.offset().top;
  console.log( conBoxOffset, moreBoxOffset );

  win.on('scroll', function(e){
    var getScroll = win.scrollTop(); // 스크롤 값
    // console.log( getScroll );

    // 스크롤값이, 
    // conBox의 offset().top (에서 브라우저 높이값 일부빠진만큼)보다 크면 수행
    if(getScroll >= conBoxOffset - winH){
      conBox.addClass('action');
    }else{
      conBox.removeClass('action');
    }

    // moreBox offset().top (에서 브라우저 높이값 일부빠진만큼)보다 크면 수행
    // 더 값이 커졌을때, moreBox offset값이 화면의 상단에 위치하면 수행
    // 조건문에서는 앞의기능이 참이면 뒤의값은 전혀 수행하지 않는다.
    if(getScroll >= moreBoxOffset - (winH/2)){
      moreBox.addClass('more');
      moreBox.removeClass('action');
    }else if(getScroll >= moreBoxOffset - winH){
      moreBox.addClass('action');
      moreBox.removeClass('more');
    }else{
      moreBox.removeClass('action');
      moreBox.removeClass('more');
    }

  });

})(jQuery)