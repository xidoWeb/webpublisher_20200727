// js_08_array2.js

var coffee = [
              'esspresso', 
              'americano',
              'capuchino', 
              'caffe latte', 
              'cafe mocha', 
              'vanila choco latte' 
              ];

// console.log(coffee);
var cLen = coffee.length;
// console.log(cLen);

// pop(), push(), shift(), unshift(), concat()
// console.log(coffee[2]);

// 없을경우: -1, 있을경우 해당위치값
var i = coffee.indexOf('cafe mocha');  
// console.log(i);

var str = '안산, 수원, 강릉, 부산, 제주, 서울, 태안, 순천, 여수, 거제, 인천';
// console.log( str.indexOf('부산') );
// console.log( str.length );

var strToArray = str.split(', ');
// console.log( strToArray );

var tel = '031-999-9999';
// console.log(tel.split('-'));

var coffeeToPar = coffee.join(', ');
// console.log(coffeeToPar); 

// console.log(coffee);
var coffeeSort = coffee.sort();
// console.log( coffeeSort );
var coffeeSortReverse = coffeeSort.reverse();
// console.log( coffeeSortReverse );
var coffeeDec = coffee.sort(function(a, b){ return b - a});
// console.log(coffeeDec);

var arr = [1,5,10,3,2,7,6,8,9];
// console.log( arr.sort(function(a,b){ return a - b }) );


coffee.push('ice tea');
coffee.pop();
coffee.shift();

// 변수.splice(시작순서, 갯수);  - 원하는 배열의 순서를 삭제
var sp = coffee.splice(1, 3); 
// console.log(coffee);

var a = 'hi';
var b = a;
    a = 'bye';
// console.log(a, b);

var c = ['toDay'];
var d = c;
    c[0] = 'nextDay';
// console.log( c[0], d[0] );
var e = c.slice();
    c[0] = 'prevDay';
console.log(c, e);

