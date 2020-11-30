// jq_04_importJson.js
(function($){
  $.ajax({
    url: '../data/make_json.json',
    dataType:'json',
    context: document.body
  }).done(function( data ){

    var wrap = $('#wrap');
    wrap.append('<ul class="list_insert"></ul>');
    var Insert = wrap.children('ul');

    var i=0;
    for(; i<data.length; i+=1){
      Insert.append('<li></li>');
      Insert.children('li').eq(-1).text( data[i].name );
    }
   
  });


// -------------------------------------------
$.ajax({url:'불러올파일'}).done(function(data){});
// -------------------------------------------


})(jQuery);