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

  var typeTest = function(evt){
    // console.log( evt.type );
    if(permission && evt.type === 'focus'){
      permission = false;
      console.log('포커스 처리되었음');
    }else if(permission && evt.type === 'click'){
      permission = false;
      console.log('클릭 되었음');
    }else {
      console.log('...');
    }   
  };

  // indicator클릭시 ul이동 -> a에 focus처리로 변경하고, 실제 배너에 a는 별도로 focus처리
  indiLi.children('a').on('focus', function(e){
    e.preventDefault();

    typeTest(e);

    var it = $(this);
    indiSlN = it.parent('li').index();      
    // console.log(indiSlN);
    indiLi.eq(indiSlN).addClass('action');
    indiLi.eq(indiSlN).siblings().removeClass('action');       
    slideUl.stop().css({'marginLeft': indiSlN * -100 + '%'});
   
  }); // indiLi.children('a).on('focus')

  // 클릭기능 수행
  indiLi.on('click', function(e){ 
    e.preventDefault(); 

    typeTest(e);

    var it = $(this);
    indiSlN = it.index();
    var propertyLink = it.children('a').attr('href');
    var thatPosition = $(propertyLink);

    // slideUl.stop().css({'marginLeft': indiSlN * -100 + '%'});
    // indiLi.eq(indiSlN).addClass('action');
    // indiLi.eq(indiSlN).siblings().removeClass('action');       
    // slideUl.stop().css({'marginLeft': indiSlN * -100 + '%'});
    thatPosition.attr({'tabIndex':'0'});
    thatPosition.focus();
  });

})(jQuery);