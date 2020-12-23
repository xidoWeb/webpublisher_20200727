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
  var cardLiHeight = cardLi.eq(0).outerWidth();
  var cardLiMargin = parseFloat(cardLi.eq(0).css('marginBottom'));

  // outerWidth(true) -> 마진값을 포함한 가로값
  // outerWidth() -> 마진값을 제외한 가로값(padding+border+width)

  /*  여기서부터 브라우저크기가 변경되면 다시 수행!!!!!! - 함수처리 */
  var BrowserSet = function(){
    // 함수가 재수행 하면 li style속성 제거
    cardLi.removeAttr('style'); 
    cardLi.css({position:"absolute"});
    var winW = win.outerWidth();
    var liLen = parseInt( winW / (cardLiWidth + cardMargin) );
    
    var ulWidth = ((cardLiWidth + cardMargin) * liLen) - cardMargin;
    cardUl.css({width: ulWidth + 'px'});
    // console.log(liLen, ulWidth);
    // li설정
    // 1. li의 순번에서 가로 행에들어가는 마지막번째에는 margin 제거
    // cardLi.eq(liLen-1).css({margin:0});
    // 2. 각각의 행에 들어가는 모든 마지막위치의 갯수번째 margin 제거
    var lin = 0;
    var liNth = Math.ceil(cardLi.length / liLen);
    var n;
    for(; lin < liNth; lin += 1){
      n = (liLen * lin) - 1;
      cardLi.eq(n).css({marginRight:0});
      
  
    };

    // 가로에 4개씩에서 4번째( eq(4*n-1) )마다 마진값 x  -> 3,7,11,15...
    // 가로에 6개씩에서 6번째( eq(6*n-1) )마다 마진값 x  -> 5,11,17,23...
    // 브라우저크기가 변경될때마다 재측정 
}; // BrowserSet();
BrowserSet();

win.on('resize', function(){
  BrowserSet();
});



})(jQuery);