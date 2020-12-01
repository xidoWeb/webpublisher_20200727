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
    var myViewLen = 10;
    var maxLen = people.length;
    var part = $('.part');
    var partUl = part.find('ul');
    var insertCode = '<li><div class="num"></div><div class="image"></div><dl><dt>title</dt><dd>email</dd></dl></li>';
    var more = $('.more_btn');
    var moreBtn = more.children('button');
    var liEq;
// ---------------------------------------------------
    var moreFn = function(j){
      var k;
      // if( j === undefined){ 
      //   k = myViewLen; 
      // }else{
      //   k = j;
      // }

      // (j === undefined)? k = myViewLen : k = j;

      k = j || myViewLen;

      myLen =  i + k;
      for(; i < myLen; i+=1){
        if( i >= maxLen){
          more.remove();
          break
        }else {
          partUl.append(insertCode);  
          liEq = partUl.children('li').eq(i);
          liEq.find('.num').text( data[i].id );
          liEq.find('.image').css({backgroundImage: 'url(' + data[i].image_data + ')' });
          liEq.find('dt').text(data[i].first_name);
          liEq.find('dd').text(data[i].address);
        }
      }// for
    };
    moreFn();
// ---------------------------------------------------
    moreBtn.on('click', function(e){
      e.preventDefault();
      moreFn(15);
    });
// ---------------------------------------------------

  });
})(jQuery);