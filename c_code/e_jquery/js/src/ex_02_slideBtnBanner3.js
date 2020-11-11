// 

(function($){
  var indiSlide =  $('.indicator_horizontal_slide');
  var indicator = indiSlide.find('.indicator');
  var indiLi    = indicator.children('li');

  var slideWrap = indiSlide.find('.slide_wrap');
  var slideUl = slideWrap.children('ul');

  var permission = true;
  var indiSlN = 0;
  var timed = 500; 

  // indicator클릭시 ul이동
  indiLi.on('focus', ['a'], function(e){
    e.preventDefault();
    if(permission){
      permission = false; 
      var it = $(this);
      indiSlN = it.index();
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