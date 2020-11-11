// ex_02_slideBtnBanner2.js

(function($){
  var slide = $('.slide_02');
  var slideBtnPart = slide.find('.slide_btn');
  var slideBtn = slideBtnPart.children('button');
  var indexSlide = slide.find('.index_slide');
  var slideLi = indexSlide.find('li');
  var liLen = slideLi.length;
  var indexN = 0;
  var permission = true;
  var timed = 500;
  
  slideLi.not( $('.action') ).hide();
// action클래스이름이 몇번째 있는지 파악하는 기능;
 var actionIndex;
 var MyActionIndex = function(){
    var i=0,  actionCheck;
    for(; i<liLen; i+=1){
      actionCheck = slideLi.eq(i).hasClass('action');
      if(actionCheck){
        actionIndex = i;
        break;
      } // if()
    } // for()
    return actionIndex;
 } // MyActionIndex()
 // -------------------------------------------------
 var SlideAction = function(){
  slideLi.eq(indexN).stop().show();
  slideLi.eq(actionIndex).stop().fadeOut(timed/2, function(){
    slideLi.eq(indexN).siblings().removeClass('action');
    slideLi.eq(indexN).addClass('action');
    setTimeout(function(){
      permission = true;
    }, timed/5);
  }); // fadeOut()
 }; // SlideAction()
 // -------------------------------------------------
 slideBtn.on('click', function(e){
  e.preventDefault();
  MyActionIndex();
  if(permission){
    permission = false; 
    var it = $(this).attr('class');
    if(it === 'next'){
      indexN += 1;
      if(indexN >= liLen ){
        indexN = 0;
      } // if()
      SlideAction();
    }else if( it === 'prev'){
      indexN -= 1;     
      SlideAction();
      if(indexN <= -1){
        indexN = liLen -1;      
      }// if()
    }// if( it === 'prev') End ------------------
  } // if(permission)
 }); // slideBtn.on('click') End

})(jQuery);
