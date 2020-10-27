// js_08_array.js

var arrQ_02 = [];
var j = 0, k, l;
for(; j < 100; j+=1 ) {
  k = j % 2;
  if(k === 0){
    continue;
  }else if(k !== 0){ 
    arrQ_02.push(j);
  }
/*
  l = parseInt(j/2);
  arrQ_02[l] = j;
*/
}

// console.log( arrQ_02 );

var cln = ['nav_01', 'nav_two', 'nav_tt', 'four'];
var nav = document.getElementsByClassName('nav')[0];
var j=0, li, link;
var clnLen = cln.length;
for(; j < clnLen ; j += 1){
  li = document.createElement('li');
  link = document.createElement('a');
  li.append(link);
  li.classList.add(cln[j]);
  link.setAttribute('href', './'+cln[j]+'.html');
  link.innerHTML = '<span>글쓰기'+ (j+1) + '<span>';
  nav.append(li);
}

