// ex_01_accordion.js

(function($){
  var part_01 = $('.part').eq(0);
  var accor_01 = part_01.children('.accordion_01');
  var accor_01Dl = accor_01.children('dl');
  var accor_01Dt = accor_01Dl.children('dt');
  var accor_01Dd = accor_01Dl.children('dd');
  
  //dt를 클릭하여 기능을 수행
  accor_01Dt.on('click', ['button'], function(e){
    e.preventDefault();
    // console.log( $(this).parent().index() );

    // dt중 클릭되어진 그것($(this))에서 
    var it = $(this);

    it.siblings('dd').stop().slideToggle(function(){
      // 그것의 형제중 첫번째 dd의 display상태 파악
      var itDdDisplay = it.siblings('dd').css('display');
      // console.log(itDdDisplay);
      if(itDdDisplay === 'block'){ 
        it.addClass('action');
        it.parent('dl').siblings().children('dt').removeClass('action');
      }else if(itDdDisplay === 'none'){
        it.removeClass('action');
      }
    });

    // 그것의 부모요소(dl)의 형제요소(siblings)의 자식인 dd를 사라지게 만들어라
    it.parent('dl').siblings().children('dd').stop().slideUp();
  
  });

})(jQuery);
