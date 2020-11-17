(function($){
  
  var data = [
    {
      "title"  : "juice_01",
      "thumImg": "juice_small_01.jpg",
      "bigImg" : "juice_big_01.jpg",
      "content": "image_01 설명 lorem2"
    },
    {
      "title"  : "juice_02",
      "thumImg": "juice_small_02.jpg",
      "bigImg" : "juice_big_02.jpg",
      "content": "image_02 설명 loewm5"
    },
    {
      "title"  : "juice_03",
      "thumImg": "juice_small_03.jpg",
      "bigImg" : "juice_big_03.jpg",
      "content": "image_03 설명 lorem10"
    },
    {
      "title"  : "juice_04",
      "thumImg": "juice_small_04.jpg",
      "bigImg" : "juice_big_04.jpg",
      "content": "image_04 설명 lorem3"
    }
  ];
  
  var url = "../../img/modal/";
  // -------------------------------------------------------------
  var modaInCode =  '<li><button type="button"><span></span></button></li>';
  var galleryCode = '<div class="gallery_box"><div class="gallery_area"><div class="close"><button type="button"><span>닫기</span></button></div><div class="big_img"><p></p></div></div></div>';
  // -------------------------------------------------------------
  var modal01 = $('.modal_01');  
  // modal01.append(galleryCode);   // 선택자 내부의 뒤에
  modal01.after(galleryCode);       // 선택자 바로 뒤에
  
  var modalUl = modal01.children('ul');
  var i=0;
  modalUl.empty(); // 선택자 내부를 지우기
  var modalBtn;
  var temLi;
  for(; i<data.length; i+=1){
    modalUl.append(modaInCode);
    temLi = modalUl.children('li').eq(-1);
    // temLi.attr({'data-big':data[i].bigImg, 'data-narr':data[i].content});
    
    modalBtn = temLi.find('button');
    modalBtn.css({
      backgroundImage:'url('+ url + data[i].thumImg +')', 
      textTransform:'uppercase'
    });
    modalBtn.children('span').text( data[i].title );
  } // for(){}

  var modalLi = modal01.find('li');
  var mLiBtn = modalLi.find('button');

  var gallery = $('.gallery_box');
  var galleryClose = gallery.find('.close');
  var bigImg = gallery.find('.big_img');
  var bigNarr = bigImg.children('p');

  var timed = 500;
  var indexChdek;
  mLiBtn.on('click', function(e){
    e.preventDefault();
    var it = $(this).parent('li');
    var itI = it.index();
    indexChdek = itI;
    // var thisBig = it.attr('data-big');
    // var thisNarr = it.attr('data-narr');
    // bigImg.css({backgroundImage: 'url(' + url + thisBig +')'});
    // bigNarr.text( thisNarr );
    
    bigImg.css({backgroundImage: 'url(' + url + data[indexChdek].bigImg +')'});
    bigNarr.text( data[indexChdek].content );

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