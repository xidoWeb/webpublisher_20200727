// ex_13.landing.js
(function($){

  var win = $(window);
  var conBox = $('#conBox');
  var moreBox = $('#moreBox');

  var winH = win.outerHeight() / 3;

  var conBoxOffset = conBox.offset().top;
  var moreBoxOffset = moreBox.offset().top;
  console.log( conBoxOffset, moreBoxOffset );

  win.on('scroll', function(e){
    var getScroll = win.scrollTop() + winH;
    // console.log( getScroll );

    if(getScroll >= conBoxOffset){
      conBox.addClass('action');
    }else{
      conBox.removeClass('action');
    }

    if(getScroll >= moreBoxOffset){
      moreBox.addClass('action');
    }else{
      moreBox.removeClass('action');
    }

  });

})(jQuery)