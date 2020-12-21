// ex_14_parallax.js

(function($){
  var win = $(window);

  var viewBox = $('#viewBox');
  var viewDiv = viewBox.children('div');

  var sampleBox = $('#sampleBox');
  var sampleUl = sampleBox.children('ul');
  var sampleList = sampleUl.children('li');

  win.on('scroll', function(e){
    var winSt = win.scrollTop();
    var setScroll = winSt/100;
    // console.log(winSt);
    viewDiv.eq(0).css({ bottom: -(setScroll*100)+'px'});
    viewDiv.eq(1).css({ bottom: -(setScroll*90) +'px'});
    viewDiv.eq(2).css({ bottom: -(setScroll*80) +'px'});
    viewDiv.eq(3).css({ bottom: -(setScroll*70) +'px'});
    viewDiv.eq(4).css({ bottom: -(setScroll*60) +'px'});
    viewDiv.eq(5).css({ bottom: -(setScroll*50) +'px'});
    viewDiv.eq(6).css({ bottom: -(setScroll*40) +'px'});
    viewDiv.eq(7).css({ bottom: -(setScroll*30) +'px'});
    // viewDiv.eq(8).css({ bottom: -(setScroll*60) +'px'});
  });





})(jQuery);