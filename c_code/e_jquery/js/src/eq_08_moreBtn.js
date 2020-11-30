// eq_08_moreBtn.js

(function($){
  $.ajax({
    url: '../data/random_people.json',
    dataType:'json',
    context:document.body
  }).done(function(data){
    var people = data;
    var i=0;
    var myLen = i;
    var myViewLen = 4;
    var maxLen = people.length;
    var part = $('.part');
    var partUl = part.find('ul');
    var insertCode = '<li><div class="image"></div><dl><dt>title</dt><dd>email</dd></dl></li>';
    var more = $('.more_btn');
    var moreBtn = more.children('button');

    myLen =  i + myViewLen;
    for(; i < myLen; i+=1){
      partUl.append(insertCode);      
    }

    moreBtn.on('click', function(e){
      e.preventDefault();
      myLen =  i + myViewLen;
      for(; i < myLen; i+=1){
        if( i >= maxLen){
          more.remove();
          break
        }else {
          partUl.append(insertCode);  
        }
      }// for
    });
    

  });
})(jQuery);