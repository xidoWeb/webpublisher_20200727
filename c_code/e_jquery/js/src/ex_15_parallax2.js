// ex_15_parallax2.js

(function($){
  
  var win = $(window);
  $('html,body').animate({scrollTop:0});
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
  // 5. logo사라지는 동안 앞에 투명막 생기게하기
  var logoR = 0.5;
   if(per >= logoR){
    logoPer = (1 + logoR) - per;
     console.log( logoR + per );    
    h1.css({opacity: logoPer, transform:'scale('+ (logoR + per) + ')' });

    headBox.addClass('default');

   }else{
     headBox.removeClass('default');
   }

  // 1. frontImg가 점점 커지게( transform:scale() );
  // 2. 점점 사라지게
  opacityR = setN + 1 - per; 

    if(scaleR <= setN){
      // console.log('scale: ', 1 + per);
      frontImg.css({transform:'scale(' + scaleR + ')'});
    }else if(scaleR >= setN + 1){      
      // console.log('opacity: ', opacityR+1);         
      frontImg.css({opacity: opacityR});
    }

  // 6. frontImg 의 투명도가 0이되면 headBox를 사라지게 만들기
  if(opacityR < 0){
    // console.log('사라진위치: ', win.scrollTop() );
    headBox.hide();
  }else{
    headBox.show();
  }

  // 3. 비행기 나타나면서 올라가기
    if(scaleR > setN){
      airPer = (scaleR - setN) * 100;
      // console.log( airPer );
      backImg.css({backgroundPositionY: airPer + '%'})
    }

  }); // win.on('scroll')



})(jQuery);