// jq_03_makeRemove.js 

(function($){
  var part = $('.part');  
  var p = part.children('p');
  var div = part.find('div');
  console.log( div );

  p.css({'border':'0.065rem solid #7a0'});

  var p1 = part.find('.text');
  p1.text('원하는 글자를 <br /> 입력할 수 있습니다.');
  var p2 = part.find('.html');
  p2.html('원하는 요소를 <br /> 삽입할 수 있습니다.');
  // $('head').text('<style>');

  var p3 = part.find('.wrap');
  p3.wrap('<dl><dt></dt></dl>');// 감싸는 요소 생성
  p3.unwrap().unwrap();  // 감싸는요소 삭제

  // prepend는 내부의 앞에 생성하게되는 메소드이며,
  // 요소의 형태로 사용하지 않으면, 다른곳의 요소를 강제로 뜯어서 가져올 수 있다.
  var p4 = part.find('.prepend');
  p4.prepend('<span>삽입?????</span>'); // p요소 내부 앞에 span삽입
  // var span = $('span');
  // prepend.prepend(span); 

  var mySpan = $('.preto');
  mySpan.prependTo( p4 ); // .preto를, p요소 내부앞에 삽입
/*
  1.   선택자A.prepend(선택자B);
  2.   선택자C.prependTo(선택자D);

  1.경우 A내부에 B를 담는것 ( 이런거 할수 있어? )
  2.경우는 D의내부에 C를 담는것 ( 할수있어 이런거? )
*/
  var p5 = part.find('.append'); //내부에 뒤에 삽입
  p5.append('<span>내부 뒤에 삽입완료!!</span>');
  mySpan.appendTo( p5 );

  var p6 = part.find('.context');
  var p6Con = p6.contents();  // p요소 내부에 들어있는 모든 내용을 가져오는 기능
  // console.log( p6Con );

  // html메소드는 기존내용을 삭제하고 새로작성한 내용을 삽입함

  // p6.html('<a href="#"></a>');
  // p6.children('a').html(p6Con)

  var p6Html = p6.html();
  // console.log( p6Html );
  p6.html('<a href="#">'+ p6Html +'</a>');

  var p7 = part.find('.before');
  p7.before('<div>.before 앞에 요소를 생성</div>');

  var p8 = part.find('.after');
  p8.after('<div>.after 뒤에 요소를 생성</div>');

  div = part.find('div');
  console.log( div );

  // attribute -> 속성을 처리하는 기능
  var p8Attr = p8.attr('title').split(' ');
  console.log( p8Attr );
  p8.attr({'data-x':'what is data'});
  // p8.removeAttr('style');
  // p8.removeAttr('class');
  // p8.removeAttr('title');
  // p8.removeAttr('data-x');
var arr = ['style','class','title','data-x'];
// arr.forEach(function(){})
// arr.forEach(function(d, i){
//   p8.removeAttr(d);
// });

$.each(arr, function(i, d){
  p8.removeAttr(d);
});
// p8.removeAttr();



})(jQuery);

