// 

(function($){
  
  var indiFadeSlide =  $('.indicator_fade_slide');
  var indicator = indiFadeSlide.children('.indicator');
  var indiLi = indicator.children('li');

  var slideWrap = indiFadeSlide.find('.slide_wrap');
  var slideUl = slideWrap.children('ul');
  var slideLi = slideUl.children('li');
  var actionLi = slideUl.find('.action');
  // actionLi.css({display:'block'});
  actionLi.show();

  indiLi.children('a').on('click focus', function(e){
    e.preventDefault();

      var it = $(this);
      var itIndex = it.parent('li').index();
      
      if(itIndex !== actionLi.index() ){
        indiLi.eq(itIndex).addClass('action');
        indiLi.eq(itIndex).siblings().removeClass('action');
        
        slideLi.eq(itIndex).addClass('action');
        slideLi.eq(itIndex).siblings().removeClass('action');
        actionLi = slideUl.find('.action');
        
        slideLi.eq(itIndex).stop().fadeIn(function(){
          slideLi.not(actionLi).stop().hide();
        }); 
      }// if(itIndex !== actionLi.index() )
  });

})(jQuery);