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
  indiLi.children('a').on('mouseenter focus click', function(e){
    e.preventDefault();
    
    var it = $(this);
    indiSlN = it.parent('li').index();      
    indiLi.eq(indiSlN).addClass('action');
    indiLi.eq(indiSlN).siblings().removeClass('action');       

    if(e.type === 'focus' || e.type === 'mouseenter'){
      slideUl.stop().animate({'marginLeft': indiSlN * -100 + '%'}, timed);
    }else if(e.type = 'click'){
      setTimeout(function(){
        var thatLink = it.attr('href');
        $(thatLink).attr({'tabIndex': 0});
        // $(thatLink).parent('li').siblings().children('a').attr({'tabIndex': -1});
        slideLi.eq(indiSlN).siblings().children('a').attr({'tabIndex': -1});
        $(thatLink).focus();
      }, timed + 10);
    }
  }); // indiLi.children('a).on('focus')

  slideLi.find('a').on('blur', function(){
    $(this).attr({'tabIndex': -1});
  })

})(jQuery);