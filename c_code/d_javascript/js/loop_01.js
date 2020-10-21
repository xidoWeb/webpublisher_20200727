// loop_01.js

/*
  var n = 0;
  console.log(n);
  n += 1;
  console.log(n);
  n += 1;
  console.log(n);
  n += 1;
  console.log(n);
  n++;
  console.log(n);
*/
/*
  var k = 0;
  while( k < 10 ){
    console.log('k: ', k);
    k += 1;
    // break;
  }
  console.log('k는 이제', k ,'이 되었습니다.');
  console.log('k는 이제', k ,'이랑께요~');
*/
/*
  // var test = document.getElementsByClassName('test')[0]; 
  // var test = document.getElementsByTagName('div')[0];
  var test = document.getElementById('wrap');
  var l = 0; 
  while(l <= 5){
    var p = document.createElement('p');
    p.innerText = (l+1) + ' 번째 p요소에 글자를 작성합니다.';
    test.append(p);
    l += 1; // 빼먹으면 큰일!!
  }
  */

  var m = 0;

  // while(m < 0) { 
  //   console.log(m); 
  //   m+=1; 
  // }

  do{
    console.log( m );
    m += 1;
  } while( m < 0 );

// 반복문의 중요포인트 3가지 : 첫번째값, 조건, 조건의수행연산(증감)

  // while(조건){ 조건이 참이면, 기능수행 }
  // do{ 일단 수행 } while( 조건비교 )