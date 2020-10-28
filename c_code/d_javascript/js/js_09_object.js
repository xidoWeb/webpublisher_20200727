// js_09_object.js

// var obj = new Object;
var obj = {
  'samsung':'galaxy',
  'apple' : 'iphone',
  'google' :'pixel',
  'lg':'belbet'
};
// console.log(obj.google);
// console.log(obj['google']);

obj.nokia = 'banana';
obj.Fn = function(person){ 
  return person + '님 반가워요!'; 
};

// console.log(obj);
var x = obj.Fn('xido');
// console.log(x);

var arrObj = [
  {'company':'apple',
   'serise':'iphone',
   'site':'http://apple.com',
   'img':'../img/apple.jpg',
   'content':'2020년 애플의 최신 아이폰 출시'
  },
  {'company':'samsung',
    'serise':'galaxy',
    'site':'https://samsung.com',
    'content':'갤럭시21 부품 유출'
  },
  {'company':'lg',
   'serise':'wing',
   'site':'https://lg.com',
   'content':'과거의 가로본능을 기억하게하는 윙'
  },
  {'company':'oneplus',
   'serise':'oneplus',
   'site':'http://oneplus.com',
   'content':'삼성,애플에 뒤쳐지지 않는성능 하지만 중국거라는 슬픈현실'
  }
];
// console.log( arrObj.length );
// console.log(arrObj[0].serise);
var p = 0; 
for(; p < arrObj.length; p += 1 ){
  console.log( ( p + 1 ) + '. ' + arrObj[p].serise );
}

arrObj.forEach(function(data, idx){
  console.log( ( idx + 1 ) + '. ' + data.serise )
});

