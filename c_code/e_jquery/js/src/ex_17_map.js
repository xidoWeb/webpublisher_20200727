// ex_17_map.js
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
// ---------------------------------------------------------------------------
    (function($){
      var store = $('.store');
      var storeLi = store.find('li');

      storeLi.on('click', function(e){
        e.preventDefault();
        $('#map').empty(); // 소스코드 중복겹침 방지

        var liLink = $(this).children('a');
        // parseInt() -> 숫자 정수로 변환
        // parseFloat() -> 숫자 소수점까지 변환

        var liLat = parseFloat(liLink.attr('data-x'));
        var liLng = parseFloat(liLink.attr('data-y'));
        // console.log(liLat, liLng);
        MySetMap(liLat, liLng);

        $(this).addClass('action');
        $(this).siblings().removeClass('action');
      });
    })(jQuery);