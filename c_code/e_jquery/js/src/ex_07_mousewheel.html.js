// ex_07_mousewheel.html.js

(function($){

  // var win = $(window);
  var web = $('html, body');
  var wrap = $('#wrap');
  var permission = true;
  var count = 0;
  var pageOffset = [];
  var pageRoll = $('.page_roll');
  var i=0;
  for(; i<pageRoll.length; i+=1){
    pageOffset[i] = pageRoll.eq(i).offset().top;
  }
  // console.log(pageOffset);


  web.animate({scrollTop:pageOffset[0]});
  
  wrap.on('mousewheel DOMMouseScroll', function(e){
    e.preventDefault();
    if(permission){
      permission = false; 
 
    // 마우스 휠 움직임 파악 
    // - 파이어폭스외 다른 브라우저
    // console.log( e.originalEvent.wheelDelta );
    // - 파이어폭스
    // console.log(e.originalEvent.detail);

    var eOriginal = e.originalEvent;
    // 수치값을 가질수 있는지 여부확인(반대성향으로 처리)
    // console.log(!eOriginal.wheelDelta);
    var mWheel;
    if(!eOriginal.wheelDelta){ 
      // firefox브라우저에서 처리
      // 3, -3이므로 -40을 곱해서 동일결과처리
      mWheel = eOriginal.detail * -40; 
    }else{
      // firefox 이외의 브라우저
      // -120, 120
      mWheel = eOriginal.wheelDelta; 
    }

    // console.log(mWheel);

    if(mWheel < 0 && count < pageOffset.length-1 ){ //휠을 아래로 스크롤시
      count += 1;
    }else if(mWheel > 0 && count > 0){// 휠을 위로 스크롤시
      count -= 1;
    }
    // console.log( count , ':' , pageOffset[count]);
    web.animate({scrollTop:pageOffset[count] + 'px'}, function(){
      setTimeout(function(){
        permission = true;
      }, 100);
    });

// -----------------------------------------------------------
    // 터치마우스 또는 노트북에있는 터치패드, 트랙패드 ... 
    // 경우는 수치가 일정하지 않음 -> if문을 이용하여 처리

    } // if(permission)
  });

})(jQuery);