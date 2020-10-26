// js_06_function.js

// var i = 0;
// console.log(i);

// 함수는 어떠한 기능을 수행하도록 처리하게만든 형태
// 함수를 호출하여 사용할때에는 '함수의이름()'을 사용한다.

var fnR = 10;
// console.log( fnR );
var fn = function(){ return 20; };

fnR = fn();
// console.log( fnR );

var fn2 = function(a){ return a*a; };
fnR = fn2(16);
// console.log( fnR );

// var old = 35;
var MyOld = function(old){
  var ret;
  if(old < 20){
    ret = '아직 미성년입니다.';
  }else if(old < 30){
    ret = '아직 순수(?) 하시군요';
  }else if(old < 60){
    ret = '가장 열심히 일하시고있는 시기이군요.';
  }else {
    ret = '이제 즐기면서 ~~';
  }
  return ret;
};

// console.log(ret);
// console.log(MyOld(15));
// console.log(ret);

// 함수 : 함수 선언식, 함수 표현식

//함수자체가 호이스팅현상 발행하여 시작점에 있는것처럼 인지
function DecFn(){ return 1;} 

// 변수명이 호이스팅현상 발생
var ExpFn = function(){ return 2;}

// console.log( DecFn() );
// console.log( ExpFn() );

// 매개변수(argument), 인수, 인자, 전역변수(global), 지역변수(local), 익명함수, 기명함수,
// 함수 선언식(declarations), 함수 표현식(Expression), hoisting, 생성자함수

// 함수는 최초의 형태 하나만 존재하므로 이를 복제하여 사용한다는 개념으로 인지-생성자함수
var myNewFn = function(nick){
  this.name = nick;
  this.family = 'lee';
  this.fullName = this.name + ' ' + this.family;
  // return nick + ' ' + family;
};

var a = new myNewFn('xido');
// console.log( a.fullName );

// this는 js에서 2가지의 개념을 가진다: 1(window), 2(생성자처리시 매개변수 또는 선택자체)
// console.log( this );
// -------------------------------------------------------------------------------------

// 선언식 (함수자체에 이름을 부여하는 방법)
// 표현식 (함수를 변수에 대입하는 방법)

// 생성자함수(함수기능을 복제하여 재처리하는 함수)
// 즉시 실행함수(함수지만 재활용이 불가능한 일회용함수)
/*
  var ffn = function(){
    var i = 10;
    var j = 7;
    return i + j;
  };
  console.log( ffn() );
*/


// 즉시실행함수(IIFE:Immediately Invoked Function Expression) 
(function(k){
  var i = k;
  var j = 7;
  console.log(i * j);
  return i * j;
})(10);


