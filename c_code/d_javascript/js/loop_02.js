// loop_02.js
// 시작의 값, 조건비교, 값의연산

/*
  var n = 0;
  while(n < 5){
    console.log(n);
    n += 1;
  }
*/

// for(var n = 0; n < 5 ; n+=1){
//   console.log(n);
// }
/*
  var y = 0;
  for( ; y < 10 ; ){
    console.log(y);
    y += 1;
  }
  // for(var y=0; y<10; y+=1){}
*/

// var k = 0;
// for( ; k < 5; k += 1 ){
//   console.log(k);
// }
// console.log('k: ' , k);

var arr = ['포도', '사과', '바나나','딸기'];
var testEl = document.getElementsByClassName('test')[0];
// 요소를 삽입하기조건: 1.요소생성, 2.요소내용기입, 3.요소삽입
var pEl;

var i = 0;
for(; i < 4; i += 1){
  pEl = document.createElement('p');
  pEl.innerText = arr[i] + '를 먹는다';
  testEl.append(pEl);
  // console.log(arr[i]);
}