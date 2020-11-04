// jq_01_selector.js
// $(document).ready(function(){});
// $(function(){});


(function($){
  var idBox = $('#box');
  idBox.css({
    'width':100 + 'px', 
    'height':100 + 'px', 
    'backgroundColor':'#fa0'});

  var boxTwo = $('.box_two');
  // boxTwo.css('width', 300 + 'px');
  // boxTwo.css('height', 50 + 'px');
  // boxTwo.css('border', 3 + 'px solid #0cf');
  boxTwo.css({'width': 300 +'px', height: 50 +'px', border:3 +'px' + ' solid ' + '#0cf'});
  
  var listThree = $('.list_three');
  var listLi    = listThree.children('li');
  listLi.css({'backgroundColor':'#fac', 'marginBottom':'5px', 'width':200 + 'px'});

  listThree.children('li:nth-child(1)').css({'color':'#03f', 'fontWeight':'bold'});
  listThree.children('li:nth-of-type(2)').css({'color':'#f30', 'fontWeight':'bold'});
  listThree.children('li:nth(2)').css({'color':'#330', 'fontSize':1.3 + 'rem'});
  listThree.children('li').eq(3).css({'color':'#fff', 'fontSize':1.3 + 'rem'});

  var listOl  = listThree.find('ol');  // .list_three  ol
  listOl.css({'border':'5px solid #777', 'padding':'10px'});
  // ol::maker, ol::before, ol::after
 var style = $('style');
 style.append('#wrap{width:800px; background-color:#ddd; margin:auto;}');
 style.append('#wrap::after{content:"글씨를 작성해보아요!";}');

// ------------------------------------------------------------------
var p2List = $('.part_2_list');
var p2Li   = p2List.children('li');
p2List.css({'listStyle':'none'});
p2Li.css({ 
  'width':'100px','height':'20px','marginBottom':'5px', 'backgroundColor':'#fff' });
p2Li.eq(4).css({'color':'#07f', 'fontWeight':'bold'});
p2Li.eq(4).prev().css({'textAlign':'right'});
p2Li.eq(4).prevAll().css({'borderRadius':'20px','boxShadow':'5px 5px 5px #555'});
// var lli = document.getElementsByTagName('li');
// for(var i=0; i<lli.length; i+=1){
//   lli[i].style.backgroundColor = '#acf';
//   lli[i].style = 'font-size:0.8rem; font-weight:bold';
// }

})(jQuery);