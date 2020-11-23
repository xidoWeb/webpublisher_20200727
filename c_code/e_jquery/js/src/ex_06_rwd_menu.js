// ex_06_rwd_menu.js

(function($){

  var winSize = deviceSize();
  var deviceType = ['mobile','table','laptop','pc','pcfull'];
  console.log( winSize );

  var headBox = $('#headBox');
  var menuBtn = $('.menu_btn');

  if(winSize === deviceType[0] || winSize === deviceType[1] ){
    headBox.append('<script src="../js/src/rwd_menu_mobile.js"></script>');
  }else{
    menuBtn.remove();
    // headBox.append('<script src="../js/src/rwd_menu_other.js"></script>');
  }

})(jQuery);