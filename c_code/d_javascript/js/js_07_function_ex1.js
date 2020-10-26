// js_07_function_ex1.js
var btnEl = document.getElementsByClassName('btn')[0];
// console.log(btnEl);
var btnChildButton = btnEl.children[0];
// console.log(btnChildButton);

var resultBox = document.getElementsByClassName('result')[0];
// console.log(resultBox);

// 1.버튼을 클릭하면, 
// 2.resultBox내부의 색상을 변경

// 1 -> 버튼.이벤트(수행)
// 2 -> 이벤트발생에의해  --> resultBox.색상변경(수행)

var myBg =  function(){  resultBox.style.backgroundColor = '#7ff'; };
btnChildButton.addEventListener('click', myBg);