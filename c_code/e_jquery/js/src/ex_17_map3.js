var key = {
  API_KEY:'49cfd9f79423707bf1b5cb82a9c968ce'
};

var body = document.querySelector('body');
var sc = document.createElement('script');
sc.setAttribute('src', 'https://dapi.kakao.com/v2/maps/sdk.js?appkey='+key.API_KEY);
body.append(sc);
setTimeout(function(){
  var sc2 = document.createElement('script');
  sc2.setAttribute('src', '../js/src/ex_17_map.js');
  body.append(sc2);
},10);