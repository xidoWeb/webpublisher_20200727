// ex_02_slideBtnBanner2.js

(function($){
  var slide = $('.slide_02');
  var slideBtnPart = slide.find('.slide_btn');
  var slideBtn = slideBtnPart.children('button');

  var indexSlide = slide.find('.index_slide');
  var slideLi = indexSlide.find('li');
  var liLen = slideLi.length;

  slideLi.not( $('.action') ).hide();
  /*
  slideLi.hide();
  indexSlide.find('.action').show();
  */
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
  slideLi.eq(indexN).show();
  slideLi.eq(actionIndex).fadeOut(function(){
    slideLi.eq(indexN).siblings().removeClass('action');
    slideLi.eq(indexN).addClass('action');
  }); // fadeOut()
 }; // SlideAction()

 // -------------------------------------------------
 var indexN = 0;
 slideBtn.on('click', function(e){
  e.preventDefault();
  MyActionIndex();
  var it = $(this).attr('class');

  if(it === 'next'){
    indexN += 1;
    if(indexN >= liLen ){
      indexN = 0;
    } // if()

    // slideLi.eq(indexN).show();
    // slideLi.eq(actionIndex).fadeOut(function(){
    //   slideLi.eq(indexN).siblings().removeClass('action');
    //   slideLi.eq(indexN).addClass('action');
    // }); // fadeOut()
    SlideAction();

  }else if( it === 'prev'){
    indexN -= 1;
    // slideLi.eq(indexN).show();
    //   slideLi.eq(actionIndex).fadeOut(function(){
    //     slideLi.eq(indexN).siblings().removeClass('action');
    //     slideLi.eq(indexN).addClass('action');
    // }); // fadeOut()
    SlideAction();

    if(indexN <= -1){
      indexN = liLen -1;      
    }// if()

  }// if( it === 'prev') End ------------------
  
  console.log( indexN );

 }); // slideBtn.on('click') End

})(jQuery);
