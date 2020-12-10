// ex_10_zoom.js

(function($){
  $.ajax({

    url:"../data/zoom_img.json",
    dataType:'json',
    context:document.body

  }).done(function(data){
    var imgData = data;
    console.log(data)
    var imgUrl = '../img/zoom/';

    var viewArea = $('.view_area');
    var product = viewArea.children('.product');
    var viewLi = viewArea.find('li');
    var viewLink = viewLi.children('a');
    var scaleArea = $('.scale_area');

    var i= viewLi.length-1;
    var vLink;
    for( ; i >= 0; --i ){
      vLink = viewLi.eq(i).children('a');
      vLink.css({backgroundImage:'url('+ imgUrl + imgData[i].thum +')'});
    }

    var setImg = function(n){
      var myN = n || 0;
      product.css({backgroundImage: 'url(' + imgUrl + imgData[myN].detail + ')'});
      scaleArea.css({backgroundImage: 'url(' + imgUrl + imgData[myN].detail + ')'});
    };

    setImg();

    // viewLink 클릭
    viewLink.on('click', function(e){
      e.preventDefault();
      var index = $(this).parent('li').index();
      setImg(index);
    });

    scaleArea.hide();
    // product 마우스 올렸을때 처리
    product.on('mouseenter', function(){
      scaleArea.stop().fadeIn();
    });

    product.on('mouseleave', function(){
      scaleArea.stop().fadeOut();
    });

    product.on('mousemove', function(e){
      e.preventDefault();
      var thisWidth = $(this).outerWidth();
      var thisHeight = $(this).outerHeight();

      var x = e.originalEvent.offsetX;
      var y = e.originalEvent.offsetY;

      var xPer = x / thisWidth * 100; 
      var yPer = y / thisHeight * 100; 

      scaleArea.css({backgroundPosition: xPer + '%' + '  ' + yPer + '%' });
    });

    // offsetX : 이벤트대상을 기준
    // pageX   : 전체문서를 기준(document)
    // clientX : 브라우저크기를 기준(window)
    // screenX : 모니터 화면을 기준(모니터)

  }); // $.ajax()
})(jQuery);