// navBox.js
(function($){
  // ================================================================
  // navigation 내용을 담을 형식 설정

  var navBox = [ 
    {'titleNav' : {'tname': 'story', 'tlink':'http://naver.com','target':'_blank'},
    'subNav'   : [{'sname':'몽피이야기', 'slink':'http://xidoweb.com'}, 
                  {'sname':'회사소개',   'slink':'http://xidoweb.com'}, 
                  {'sname':'후원',       'slink':'http://xidoweb.com'}, 
                  {'sname':'sns',        'slink':'http://xidoweb.com'}] },
    {'titleNav' : {'tname':'menu','tlink':'http://naver.com','target':'_blank'},
    'subNav'   : [{'sname':'커피류',           'slink':'http://w3.org'},
                  {'sname':'기타음료',         'slink':'http://w3.org'},
                  {'sname':'음식 및 디저트',   'slink':'http://w3.org'},
                  {'sname':'선물상품',         'slink':'http://w3.org'},
                  {'sname':'기타 안내',        'slink':'http://w3.org'}] },
    {'titleNav' : {'tname':'store','tlink':'http://naver.com','target':'_blank'},
    'subNav'   : [{'sname':'신규매장',   'slink':'http://daum.net'}, 
                  {'sname':'매장찾기',   'slink':'http://daum.net'}, 
                  {'sname':'가맹문의',   'slink':'http://daum.net'}, 
                  {'sname':'창업설명회', 'slink':'http://daum.net'}, 
                  {'sname':'창업스토리', 'slink':'http://daum.net'}] },
    {'titleNav' : {'tname':'news','tlink':'http://naver.com','target':'_blank'},
    'subNav'   : [{'sname':'이벤트',     'slink':'http://google.com'}, 
                  {'sname':'공지사항',   'slink':'http://google.com'}, 
                  {'sname':'프로모션',   'slink':'http://google.com'}, 
                  {'sname':'미디어광고', 'slink':'http://google.com'}],    
  }];
  // console.log( navBox.length );
  // ================================================================
  // #navBox내부에 각각의 요소내용 삽입

  var navList = '<li><dl><dt></dt><dd></dd></dl></li>';
  var navBoxSel = $('#navBox');
  var navBoxSelUl = navBoxSel.children('ul');
  var navLen = navBox.length;
  var navDt, navDd, subNavLen, i, j, tNav, sNav;
  for(i=0; i<navLen; i+=1){
    navBoxSelUl.append(navList);
    navDt = navBoxSelUl.children('li').eq(i).find('dt');
    navDd = navBoxSelUl.children('li').eq(i).find('dd');
    tNav = navBox[i].titleNav;
                                 
    navDt.append('<a href="'+ tNav.tlink +'" target="'+ tNav.target +'">'+ tNav.tname +'</a>');
    // navDt.append(`<a href="${tNav.tlink}" target="${tNav.target}">${tNav.tname}</a>`);

    subNavLen = navBox[i].subNav.length;    
    for( j=0; j<subNavLen; j+=1){
      sNav = navBox[i].subNav[j];
      navDd.append('<a href="'+ sNav.slink +'">'+ sNav.sname +'</a>');
      // console.log(j);
    }
  } // for end
// ----------------------------------------------------------------------
var navBoxFindDt = navBoxSel.find('dt');
var navBoxFindDtLink = navBoxFindDt.find('a');
var navBoxFindDd = navBoxSel.find('dd');
var navBoxFindDdLink = navBoxFindDd.find('a');
navBoxFindDd.hide();
// navBoxSelUl.addEventListener('mouseenter', function(){});

var navSlideDown = function(){  
  navBoxFindDd.stop().slideDown(); 
};
var navSlideUp = function(){
  navBoxFindDd.stop().slideUp();
};

// navBoxSelUl.on('mouseenter', navSlideDown);
// navBoxSelUl.on('mouseleave', navSlideUp);
navBoxSelUl.on({
  'mouseenter':navSlideDown, 
  'mouseleave':navSlideUp 
});

navBoxFindDtLink.on('focus', navSlideDown);
navBoxFindDdLink.eq(-1).on('blur', navSlideUp);

})(jQuery);

/**선택시
js에서는 자식을 선택할경우에 children() -> jQuery에서도 children()
js에서 자손요소를 선택시 getElement...() -> jQuery에서는 find()
*/
/** 요소첨부시 
-- js에서는
document.createElement();  //생성 후
선택자.append()                // 삽입
====================================
-- jQuery에서는 
선택자.append('요소이름')    // 생성과동시에삽입
*/

// 링크 주소담기
// 기능요약/함수화처리