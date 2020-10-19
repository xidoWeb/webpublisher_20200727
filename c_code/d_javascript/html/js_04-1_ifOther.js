// js_04-1_ifOther.js

var n = 1;
var r = n == '1';   // == 타입비교가 아닌 단순 값 자체만을 비교하기에 답은 true
var r2 = n === '1'; // === 값과 타입까지 비교하므로 false
// console.log(r2);

n = '문자';
// if( n < 10 ){
//   console.log(' n은 10보다 작은수! ');
// }else{
//   console.log('n은 10보다 큰수');
// }
/*
if( n > 30){
  console.log('n은 30보다 큰수');
}else if( n <= 30 && n > 20){
  console.log('n은 30보다 작거나 같고, 20보다 크다');
}else if(n <= 20 && n > 10){
  console.log('n은 20보다 작거나 같고, 10보다 크다');
}else if(n <= 10 || typeof(n) === 'string'  ){
  console.log('n은 10보다 작거나 같은 숫자이거나, 문자형글자이다');
}
*/

var body = document.getElementsByTagName('body')[0];
window.addEventListener('resize', function(){

  var winWidth = document.body.clientWidth;
  console.log('브라우저가로값: ' , winWidth);
  if(winWidth > 1600) {
    body.style.backgroundColor = "#ccc";
  }else if( winWidth <= 1600 && winWidth > 1200) {
    body.style.backgroundColor = '#acf';
  }else if( winWidth <= 1200 && winWidth > 767) {
    body.style.backgroundColor = '#fac';
  }else{
    body.style.backgroundColor = '#f7c';
  }
  
});