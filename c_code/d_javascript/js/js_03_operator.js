// js_03_operator.js

console.log('start!!!');

// 연산자(operator) : + - * / %
// 피연산자(operand) : 1 + 1 에서 연산자를 제외한부분

var n = 10;
/*
  var sum;
  sum = 10 + 20;
  console.log(sum);
  
  var min;
  min = 10 - 5;
  console.log(min);
  
  var multi;
  multi = n * 3;
  console.log(multi);
  
  var div;
  div = n / 3;
  var divR = parseInt( div );
  // var divR = Math.round(div)
  console.log( divR );
  
  var fac; 
  fac = n % 3;  // 10 / 3 처리시 몫을 제외한 나머지
  console.log(fac);
  console.log( 'n:', n );

  // n =  n + 2;
  // A사람이 사과 2개, 2개를 추가로 주었다. 몇개를 가지고 있는가?
 var a = 2;
 a = a + 2;
 console.log( a );
 // 그런데 거기에 10를 더 추가로 주었다? 그럼 몇개?
 a = a + 10;
 console.log( a );  // 1. 12, 2. 14, 3. 10, 4.에러
// 너무많이 주엇다고 3개를 가져갔다? 몇개일까?
 a = a - 3;
 console.log( a );
 a = a * 3;
 console.log( a );
 
 a += 5; // a = a + 5;
 console.log( a );
 
 a -= 10; // a = a - 10
 console.log( a );
 
 a /= 2; // a= a / 2
 console.log( a );
 
 a *= 100; // a = a * 100
 console.log( a );
*/

// 증감연산자
 var b = 0; 
//  b += 1;

console.log(++b); // 1
++b; // 2 // 전치연산
++b; // 3
++b; // 4
++b; // 5
++b; // 6
++b; // 7
++b; // 8
console.log(b);
console.log(--b);
b++; // 후치연산
console.log(b);
console.log(++b);
console.log(++b);
console.log(++b);
console.log('검증', b);
console.log(b++);
console.log(b++);
console.log(b++);
console.log(b++);
console.log(b++);
console.log('검증', b);



