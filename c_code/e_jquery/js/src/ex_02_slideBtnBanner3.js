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

  // slide_wrap 내부 a focus기능 강제 비처리
  slideLiLink.attr({'tabIndex':'-1'});


  // indicator클릭시 ul이동 -> a에 focus처리로 변경하고, 실제 배너에 a는 별도로 focus처리
  // 클릭기능 일단 보류
  indiLi.on('click', function(e){ e.preventDefault(); });

  indiLi.children('a').on('focus', function(e){
    e.preventDefault();
    if(permission){
      permission = false; 
      var it = $(this);
      indiSlN = it.parent('li').index();
      slideUl.stop().animate({'marginLeft': indiSlN * -100 + '%'}, function(){
        indiLi.eq(indiSlN).addClass('action');
        indiLi.eq(indiSlN).siblings().removeClass('action');

        setTimeout(function(){
          permission = true;
        }, timed/5);
      });
    } // if(permission)
  }); // indiLi.on('click')


})(jQuery);