// dom_01_selector_01.js

var wrap = document.getElementById('wrap'); // $('#wrap');
wrap.style = 'background-color:#ccf;\
              border:2px solid #333';              

var headBox = document.getElementById('headBox');
headBox.style = 'width:100%; height:250px; background-color:#fa0';

var h1 = document.getElementsByTagName('h1')[0]; // $('h1');
h1.style = 'width:150px; height:50px; background-color:#acf;';

var h1Link = h1.getElementsByTagName('a')[0]; // h1.find('a');
h1Link.style = 'color:#333; text-decoration:none;';

// var navBox = document.getElementById('navBox');
var navBox = document.querySelector('#navBox');
navBox.style = 'width:70%; \
               padding:0; margin:auto;\
               background-color:#fff';
var navList = navBox.querySelectorAll('li');
// navList[0].style = 'background-color:#f7c; margin-bottom:2px;';
navList.forEach(function(data){
  data.style = 'background-color:#f7c; margin-bottom:2px;';
});
