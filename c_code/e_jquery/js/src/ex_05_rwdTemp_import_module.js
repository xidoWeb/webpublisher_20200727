// ex_05_rwdTemp_import_module.js

(function($){
  var nowW = deviceSize();
  // console.log(nowW);
  var deviceType = ['mobile', 'table', 'laptop', 'pc', 'pcfull'];
// ---------------------------------------------------------------------
  var url = './rwdTemp/';
  var headBox = $('#headBox');
  var viewBox = $('#viewBox');

//----------------------------------------------------------------------
// viewBox import file
var viewImport = function(){
  viewBox.append('<script src="../js/src/temp_mobile.js"></script>');
};
//-------------------------------
  if(nowW === deviceType[0]){

    headBox.load( url + 'redTemp_headBox_mobile.html');
    viewBox.load( url+ 'rwdTemp_mobile.html' , viewImport);

  }else if(nowW === deviceType[1]){
    headBox.load( url + 'redTemp_headBox_tablet.html' );
    viewBox.load( url+ 'rwdTemp_tablet.html' , viewImport);
  }else{
    headBox.load( url + 'redTemp_headBox_pc.html' );
    viewBox.load( url+ 'rwdTemp_pc.html' , viewImport);
  }

})(jQuery); 