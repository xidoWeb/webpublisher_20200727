(function($){
  var modal01 = $('.modal_01');
  var modalLi = modal01.find('li');
  var mLiBtn = modalLi.find('button');
  
  var gallery = $('.gallery_box');
  var galleryClose = gallery.find('.close');
  var bigImg = gallery.find('.big_img');
  var bigNarr = bigImg.children('p');

  var timed = 500;
  var url = "../../img/modal/";
  var indexChdek;
  mLiBtn.on('click', function(e){
    e.preventDefault();
    var it = $(this).parent('li');
    var itI = it.index();
    indexChdek = itI;
    var thisBig = it.attr('data-big');
    var thisNarr = it.attr('data-narr');

    bigImg.css({backgroundImage: 'url(' + url + thisBig +')'});
    bigNarr.text(thisNarr);
    gallery.stop().fadeIn(function(){
      galleryClose.children('button').focus();
      setTimeout(function(){
        bigNarr.addClass('action');
      }, timed/2)
    });
  });

  galleryClose.on('click', function(e){
    e.preventDefault();
    gallery.stop().fadeOut();
    modalLi.eq(indexChdek).find('button').focus();
    bigNarr.removeClass('action');
  });

})(jQuery);