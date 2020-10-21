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
/*
  var arr = ['포도', '사과', '바나나','딸기'];
  var classN = ['grape','apple','banana','straw'];
  var testEl = document.getElementsByClassName('test')[0];
  // 요소를 삽입하기조건: 1.요소생성, 2.요소내용기입, 3.요소삽입
  var pEl;

  var i = 0;
  for(; i < 4; i += 1){
    pEl = document.createElement('p');
    pEl.innerText = arr[i] + '를 먹는다';

    // 각각의 p에 class이름을 삽입해보세요
    // 1. setAttribute : 속성을변경이가능(어떠한 속성명이든 관계없다.) ===========
    // pEl.setAttribute('title', classN[i]);
    // 2. className : 속성중 오직 class속성만 이름변경 ===========================
    // pEl.className = classN[i];
    // 3. classList : 클래스 속성을 리스트처럼 여러개 설정 가능 ==================
    pEl.classList = classN[i] ;
    pEl.classList.add('testClass');
    // pEl.classList.add( classN[i] );  
    // pEl.classList.remove( classN[i] );
    // pEl.classList.toggle( classN[i] );
    testEl.append(pEl);
    // console.log(arr[i]);
  }
*/


// for(최초의값; 조건; 연산수행){}

var coffee = ['esspress','americano','latte','flat white','cafe mocha', 'long black'];
// for(var j=0; j< coffee.length ; j+=1){
//   console.log('1:', coffee[j] );
// }

// for ~ in 문법은 객체를 위한 형식, 배열을 위해만든 형식이 아니다.
// for(var i in coffee){  console.log('2:', coffee[i]); }

// 배열형식을 사용할때에는 for, forEach를 사용
// coffee.forEach(function(data, index){
//   console.log( data, index );
//  });

// for ~ in 을 위해서는 객체를 위해 사용
var obj = {
  'spring': 'black tea',
  'summer': 'ice americano',
  'fall'  : 'hot choch',
  'winter': 'pepsi'
};
// var o = 0;
// for(; o < 4; o += 1){  console.log( obj.spring ); }
// for(var o in obj){
//   // obj.spring
//   // obj.summer
//   // obj.fall
//   // obj.winter
//   // console.log( o ); 
//   console.log( obj[o] );
// }

// 반복문
// for, forEach, for-in

var i = 0;
for(; i<100; i+=1 ){

  if(i < 10){
    console.log( '0' + i );
  }else if(i === 50){
    // break;
    continue;
  }else{
    console.log( i );
  }
  
}