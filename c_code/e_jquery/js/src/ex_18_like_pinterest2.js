// ex_18_like_pinterest2.js

(function($){
  // 1. 카드 감싸는영역 크기설정, 내용물 삽입 
  // 2. 스크롤의 진행위치값 표시
  // 3. 스크롤시 일정위치가 넘어가면 추가 카드가 생성되게 처리
  // 4. Math.random()을 이용하여 색상, 높이값을 변경
  
  // 4-1. 컬러 랜덤 색상설정
  var Rn = function(){
    return  Math.floor(Math.random()*16).toString(16);
  };
  // var randomColor = '#'+Rn()+Rn()+Rn();  
  // console.log(randomColor);

  // 4-2. 높이값 랜덤수치 변경
  var RandomHeight = function(){
    var h = parseInt(Math.random() * 7) * 40;
    return h;
  };

// ================================
// 2번기능 스크롤시 진행위치값
  var headBox = $('#headBox');
  headBox.prepend('<div class="scroll_percent"></div>');
  var scrollP = $('.scroll_percent ');
  scrollP.css({
    position:'absolute', top:0, left:0,zIndex:-1,
    width:0, height:'90%', opacity:0.2,
    backgroundColor:'#f06',
    transform:'translate(-0.5rem) scale(1.1) skew(-15deg)'
  });
// 2번기능 세팅 ----------------------------------
// ================================
  var cardCode = '<div class="card"><div class="card_img"></div><div class="card_narr"><a href="#"><dl><dt>title</dt><dd>Lorem, ipsum.</dd></dl></a></div></div>';

  // window, cardBox, card_area 선택자
  var win = $(window);
  var cardBox = $('#cardBox');
  var cardArea = cardBox.children('.card_area');

  // 추가 선택자
  var card; 
  // 1. card 생성
  // 3번에서 요구하는 카드생성형태이므로 중복 수행이기에 함수화 처리
  var i=0;   
  var cardCount = 0;
  var randomColor = [];
  var cardRandomHeight = []; 

  var AppendCardFn = function(){
    cardCount += 50; 
    // var r1,r2,r3;
    
    for(; i < cardCount; i++){
      // r1 = parseInt(Math.random()*16).toString(16);
      // r2 = parseInt(Math.random()*16).toString(16);
      // r3 = parseInt(Math.random()*16).toString(16);
      cardArea.append(cardCode);
      card = cardArea.children('.card').eq(i);
      card.find('dt').text( 'title_'+ (i+1) );
      randomColor[i] = '#'+Rn()+Rn()+Rn();
      // randomColor[i] = '#'+r1+r2+r3;
      card.find('.card_img').css({
        backgroundColor:randomColor[i]
      });
      // card높이값을 기존값과 random함수값을 합쳐서 처리
      cardRandomHeight[i]=card.outerHeight()+RandomHeight();
      card.css({height:cardRandomHeight[i] + 'px'});
    }
    // console.log( randomColor );

    $('.card').css({float:'left'});

  }// AppendCardFn();
  AppendCardFn();

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

  // 브라우저 크기 변경시 cardArea 사이즈 재수정
  win.on('resize', function(){
    CardWidthSet();
  });

// -----------------------------------
// 2번기능 스크롤시처리 
  win.on('scroll', function(){
    var st = $(this).scrollTop();
    var wrap = $('#wrap');
    var wrapHeight = wrap.outerHeight();
    var wihH = win.outerHeight();

    // 퍼센트 공식: 값 / 기준(전체) * 100
    // 스크롤처리시에는 화면의 높이값 만큼 빼주어야한다.
    var per = st / (wrapHeight-wihH) * 100;
    // console.log(per);
    // .scroll_percent 의 가로값에 적용
    scrollP.css({width: per + '%'});

    // 3번기능 일정수치가 넘어가면 추가 카드를 생성
    // 카드를 생성한 영역을 재호출, 기존의 카드는 유지
    if(per >= 100){
      AppendCardFn();
    }
  });
// -----------------------------------



})(jQuery);