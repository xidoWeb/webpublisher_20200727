(function($){
  var modal01 = $('.modal_01');
  var modalLi = modal01.find('li');
  var mLiBtn = modalLi.find('button');
  
  var gallery = $('.gallery_box');
  var galleryClose = gallery.find('.close');
  var bigImg = gallery.find('.big_img');

  var url = "../../img/modal/";
  var indexChdek;
  mLiBtn.on('click', function(e){
    e.preventDefault();
    var it = $(this).parent('li');
    var itI = it.index();
    indexChdek = itI;
    var thisBig = it.attr('data-big');
    gallery.stop().fadeIn(function(){
      galleryClose.children('button').focus();
    });
    bigImg.css({backgroundImage: 'url(' + url + thisBig +')'});
  });

  galleryClose.on('click', function(e){
    e.preventDefault();
    gallery.stop().fadeOut();
    modalLi.eq(indexChdek).find('button').focus();
  });
})(jQuery);