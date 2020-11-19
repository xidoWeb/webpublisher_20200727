// ex_05_rwdTemp.js

/** 
 * 1. 브라우저의 가로 크기값 확인
 * 2. 내가 원하는 기준치로 설정된 범위(이름을 설정해서 처리)에 맞는지 파악(mobile, tablet, laptop, pc ...)
 * 3. 브라우저의 크기가 변경될때('resize') 기존 가로값과 변경된 가로값을 비교하여, 일치하지 않을경우에 일부 재처리
*/
var deviceSize = function(){

  var resultDevice;

  (function($){  
    // var winW = win.css('width'); // 1. 문자로 값을 가져옴, 2. padding, margin, border
    // var winM = win.css('marginLeft');
    // var winM2 = win.css('marginRight');
    // var winp = win.css('paddingLeft');
    // var winp2 = win.css('paddingRight');
    // var winb2 = win.css('paddingRight');
    
    
    // 선택자.width() -> 가로값을수치  
    // .innerWidth()  -> padding포함 가로값
    // .outerWidth()  -> border(padding포함)값을 포함 가로값
    // .outerWidth(true) -> margin(border+padding)을 포함한 가로값
  // --------------------------------------------------------------------------------------

    // 기준치를 설정
    // [ 480, 1024, 1440, 1920];
    var deviceType = [
      {type:'mobile', size:480}, 
      {type:'table', size:1024},
      {type:'laptop', size:1440},
      {type:'pc', size:1920},
      {type:'pcfull'}
    ];

    // 브라우저 최초크기값 확인
    var win = $(window); 
    var beforeWinW = win.outerWidth(true);
    
    var deviceCheck = function(winW){
    // type 체크
      var myType;
  /*
          if(winW <= deviceType[0].size){
            myType = deviceType[0].type;
          }else if(winW <= deviceType[1].size){
            myType = deviceType[1].type;
          }else if(winW <= deviceType[2].size){
            myType = deviceType[2].type;
          }else if(winW <= deviceType[3].size){
            myType = deviceType[3].type;
          }else{
            myType = deviceType[deviceType.length -1].type;
          }
  */

        for(var i=0; i<deviceType.length; i+=1){
          if(winW <= deviceType[i].size){
            myType = deviceType[i].type;
            break;
          }else{
            myType = deviceType[deviceType.length -1].type;
          }
        }
        // console.log(myType);
        return myType;
    }  // deviceCheck();

    var winSize = deviceCheck(beforeWinW);
    resultDevice = winSize;
  // ------------------------------------------------------------------
    win.on('resize', function(){
      // 사이즈변경시 브라우저 크기값 재 확인
      var reWinW = win.outerWidth(true);
      var afterWinSize = deviceCheck(reWinW);

      // 기존 디바이스타입과 변경된 디바이스타입이 다른경우 새로고침
      if(winSize !== afterWinSize){
        location.reload();
      }
      
    });
    return resultDevice;
  })(jQuery);
  return resultDevice;
};