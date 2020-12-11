// ex_11_mousemove

(function($){
  var wrap = $('#wrap');
  var ch   = wrap.find('.character');
  wrap.on('mouseenter', function(){    ch.show();  });
  wrap.on('mouseleave', function(){    ch.hide();  });

  wrap.on('mousemove', function(e){
    e.preventDefault();

    var eOrigin = e.originalEvent;
    // 가로,세로
    var w = $(this).outerWidth();
    var h = $(this).outerHeight();

    // x,y 좌표
    var x = eOrigin.offsetX; 
    var y = eOrigin.offsetY;
    console.log(x, y);

    ch.css({left:(x/2)+'px', top:(y/5)+'px'});

  });
})(jQuery);