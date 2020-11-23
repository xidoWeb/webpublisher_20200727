// ex_07_mousewheel.html.js

(function($){
  var wrap = $('#wrap');
  var permission = true;
  
  wrap.on('mousewheel DOMMouseScroll', function(e){

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

    console.log(mWheel);

    // 터치마우스 또는 노트북에있는 터치패드, 트랙패드 ... 
    // 경우는 수치가 일정하지 않음
  });

})(jQuery);