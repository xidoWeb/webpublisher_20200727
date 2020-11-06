// jq_02_showHide.js
(function($){

  var timed = 1000;
  var box = $('.box');
  var boxPar = box.children('p');
  boxPar.animate({'borderRadius':'1rem'});

  var part = $('.part');
  var partUl = part.children('ul');
  var showHide = partUl.children('.show_hide');
  var fade = partUl.children('.fade');
  var slide = partUl.children('.slide');
  var className = partUl.children('.class_name');
  var other = partUl.children('.other');

  // show-hide
  var shBtn = showHide.children('button');
  shBtn.eq(0).on('click', function(e){
    e.preventDefault();
    boxPar.stop().show( timed ); });

  shBtn.eq(1).on('click', function(e){
    e.preventDefault();
    boxPar.stop().hide( timed ); });

  shBtn.eq(2).on('click', function(e){
    e.preventDefault();
    boxPar.stop().toggle( timed ); });

})(jQuery);