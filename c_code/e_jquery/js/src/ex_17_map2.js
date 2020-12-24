// ex_17_map.js
var body = document.getElementsByTagName('body')[0];
var sc = document.createElement('script');
var api = 'https://dapi.kakao.com/v2/maps/sdk.js?appkey=49cfd9f79423707bf1b5cb82a9c968ce';
sc.setAttribute('src', api);
body.append(sc);
// body.append('<script src="https://dapi.kakao.com/v2/maps/sdk.js?appkey=49cfd9f79423707bf1b5cb82a9c968ce"></script>');


var container = document.getElementById('map'); 
  // 37.26281403104591,127.02997932119412
    var MySetMap = function(lat, lng){
      var options = { 
        center: new kakao.maps.LatLng(lat, lng), 
        level: 4 };
      var map = new kakao.maps.Map(container, options);
      var markerPosition = new kakao.maps.LatLng(lat, lng); 
      var marker = new kakao.maps.Marker({
          position: markerPosition});
      marker.setMap(map);
      map.setZoomable(false); 
      var zoomControl = new kakao.maps.ZoomControl();
      map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

    };// MySetMap()

  MySetMap(37.26281403104591,127.02997932119412);

