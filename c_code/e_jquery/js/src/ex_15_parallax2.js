// ex_15_parallax2.js

(function($){
  var win = $(window);
  var winH = win.outerHeight();

  var headBox = $('#headBox');
  var h1 = headBox.find('h1');
  var frontImg = headBox.find('.front_image');
  var backImg = headBox.find('.back_image');

  var setN = 1.5;


  // 브라우저 스크롤시 수행
  win.on('scroll', function(){
    var winSt = $(this).scrollTop();
    var per = winSt / winH;
    var scaleR = 1+per;
    var opacityR, airPer, logoPer;

  // 4. logo 사라지게 만들기 
  var logoR = 0.5;
   if(per >= logoR){
    logoPer = (1 + logoR) - per;
     console.log( logoR + per );    
    h1.css({opacity: logoPer, transform:'scale('+ (logoR + per) + ')' });
   }

  // 1. frontImg가 점점 커지게( transform:scale() );
  // 2. 점점 사라지게
    if(scaleR <= setN){
      // console.log('scale: ', 1 + per);
      frontImg.css({transform:'scale(' + scaleR + ')'});
    }else if(scaleR >= setN + 1){      
      // console.log('opacity: ', opacityR+1);
      opacityR = setN + 1 - per;    
      frontImg.css({opacity: opacityR});
    }

  // 3. 비행기 나타나면서 올라가기
    if(scaleR > setN){
      airPer = (scaleR - setN) * 100;
      // console.log( airPer );
      backImg.css({backgroundPositionY: airPer + '%'})
    }

  }); // win.on('scroll')



})(jQuery);