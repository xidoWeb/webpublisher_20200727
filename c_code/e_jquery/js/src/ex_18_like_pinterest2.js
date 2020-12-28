// ex_18_like_pinterest2.js

(function($){
  var cardCode = '<div class="card"><div class="card_img"></div><div class="card_narr"><a href="#"><dl><dt>title</dt><dd>Lorem, ipsum.</dd></dl></a></div></div>';

  // window, cardBox, card_area 선택자
  var win = $(window);
  var cardBox = $('#cardBox');
  var cardArea = cardBox.children('.card_area');

  // 추가 선택자
  var card; 
  // card 생성
  var i=0; 
  var cardCount = 50;

  for(; i < cardCount; i++){
    cardArea.append(cardCode);
    card = cardArea.children('.card').eq(i);
    card.find('dt').text( 'title_'+ (i+1) );
  }

  // .card_area의 가로값 세팅
  var cardEq0 = $('.card').eq(0);
  var cardWidth = cardEq0.outerWidth(); 
  //outerWidth = 가로+패딩+외곽선;
  var cardWidthLen;
  var CardWidthSet = function(){
    cardWidthLen = 
    parseInt(cardBox.outerWidth() / cardWidth);
    cardArea.css({width:cardWidth * cardWidthLen + 'px'});
  }// CardWidthSet();
  CardWidthSet();

  $('.card').css({float:'left'});
  // 브라우저 크기 변경시 cardArea 사이즈 재수정
  win.on('resize', function(){
    CardWidthSet();
  });




})(jQuery);