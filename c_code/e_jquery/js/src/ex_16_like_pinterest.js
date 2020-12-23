// ex_16_like_pinterest.js

(function($){
  /** todo list...
   * [o] 카드 js 에서구현하기 
   * [x] json파일 생성해서 불러오기/이미지 리스트화 처리
   * [] 생성된 ul의 가로 크기를 li의 갯수만큼 담을 수 있도록 수정
   */
  var win = $(window);
  var cardBox = $('#cardBox');
  cardBox.append('<ul></ul>');
  var cardUl = cardBox.children('ul');
  var liText = '<li><a><div class="img_temp"><img></div><span></span></a></li>';
  var y = 0;
  for(; y < 20; y += 1){
    cardUl.append(liText);
  }
  var cardLi = cardUl.children('li');

  // ul의 크기설정
  // 1. li의 가로크기, li의 마진값(공백)
  // 2. 브라우저에서의 기준 크기
  
  var cardLiWidth = cardLi.eq(0).outerWidth();
  var cardMargin = cardLi.eq(0).outerWidth(true) - cardLiWidth;
  // outerWidth(true) -> 마진값을 포함한 가로값
  // outerWidth() -> 마진값을 제외한 가로값(padding+border+width)

  var winW = win.outerWidth();
  var liLen = parseInt( winW / (cardLiWidth + cardMargin) );
  // 정수화처리 : parseInt() 
  // 버림,올림,반올림:  Math.floor(), Math.ceil(), Math.round()
  // console.log( liLen );
  var ulWidth = (cardLiWidth * liLen);// - cardMargin;
  cardUl.css({width: ulWidth + 'px'});
  console.log(ulWidth);


})(jQuery);