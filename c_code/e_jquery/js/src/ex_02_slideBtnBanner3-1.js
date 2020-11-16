// 

(function($){
  var indiSlide =  $('.indicator_horizontal_slide');
  var indicator = indiSlide.find('.indicator');
  var indiLi    = indicator.children('li');

  var slideWrap = indiSlide.find('.slide_wrap');
  var slideUl = slideWrap.children('ul');
  var slideLi  = slideUl.children('li');
  var slideLiLink = slideLi.children('a');

  var permission = true;
  var indiSlN = 0;
  var timed = 500; 

  slideLiLink.attr({'tabIndex':'-1'});

  var typeTest = function(evt, propertyLink){
    evt.preventDefault();
    if(evt.type === 'focus'){
      console.log('focus');
      slideUl.stop().animate({'marginLeft': indiSlN * -100 + '%'},timed);      
    }else if(permission){
      setTimeout(function(){       
        var thatPosition = $(propertyLink);
        slideLi.eq(indiSlN).children('a').attr({'tabIndex':'0'});
        slideLi.eq(indiSlN).siblings().children('a').attr({'tabIndex':'-1'});
        thatPosition.focus();
      }, timed+100);
     }   
  };

  // indicator클릭시 ul이동 -> a에 focus처리로 변경하고, 실제 배너에 a는 별도로 focus처리
  indiLi.children('a').on('focus click', function(e){
    e.preventDefault(); 

    var it = $(this);
    indiSlN = it.parent('li').index();      
    var propertyLink = it.attr('href');
    indiLi.eq(indiSlN).addClass('action');
    indiLi.eq(indiSlN).siblings().removeClass('action');           
 
    typeTest(e, propertyLink);
  }); // indiLi.children('a).on('focus')

})(jQuery);