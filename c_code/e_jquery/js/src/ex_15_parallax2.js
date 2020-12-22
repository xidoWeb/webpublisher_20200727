// ex_15_parallax2.js

(function($){
  var win = $(window);
  var winH = win.outerHeight();

  var headBox = $('#headBox');
  var frontImg = headBox.find('.front_image');
  var backImg = headBox.find('.back_image');

  var setN = 1.5;

  // 브라우저 스크롤시 수행
  // 1. frontImg가 점점 커지게( transform:scale() );
  // 2. 점점 사라지게
  win.on('scroll', function(){
    var winSt = $(this).scrollTop();
    var per = winSt / winH;
    var scaleR = 1+per;
    var opacityR;
    
    if(scaleR <= setN){
      // console.log('scale: ', 1 + per);
      frontImg.css({transform:'scale(' + scaleR + ')'});
    }else if(scaleR >= setN + 1){      
      // console.log('opacity: ', opacityR+1);
      opacityR = setN + 1 - per;    
      frontImg.css({opacity: opacityR});
    }

  // 비행기 나타나면서 올라가기
    if(scaleR > setN){
      var airPer = (scaleR - setN) * 100;
      console.log( airPer );
      backImg.css({backgroundPositionY: airPer + '%'})
    }

  }); // win.on('scroll')



})(jQuery);