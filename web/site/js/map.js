SNAPMAPPER = {
  lat: null,
  lon: null
};


if(navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(createMap);
}

function createMap(position) {
  SNAPMAPPER.lat = position.coords.latitude;
  SNAPMAPPER.lon = position.coords.longitude;
  initMap();
}

function initMap() {
  var options = {
    'center': SNAPMAPPER.lat + ',' + SNAPMAPPER.lon,
    'zoom': 17,
    'disableDefaultUI': true,
    'callback': mapCallback
  };

  $(function() {
    $('#map_canvas').gmap(options);
  });
}

function mapCallback() {
  var self = this;
  self.addMarker({
    'position': this.get('map').getCenter()
  }).click(function() {
    self.openInfoWindow({
      'content': 'Hello World!'
    }, this);
  });
  displayDataOnMap();

}

function displayDataOnMap() {
  $.get('/businesses/?lon=' + SNAPMAPPER.lon + '&lat=' + SNAPMAPPER.lat, function(data) {
    $.each(data, function(i, business) {
      $('#map_canvas').gmap('addMarker', {
        'position': new google.maps.LatLng(business.Latitude, business.Longitude),
        'bounds': true
      }).click(function() {
        $('#map_canvas').gmap('openInfoWindow', {
          'content': getInfoContent(business)
        }, this);
      });
    });
  });
}

function getInfoContent(b) {
  var html = [];
  html.push('<p>', b.StoreName, '</p><label style=\'font-size: 1em;\'>', b.Address,
    ', ', b.City, ', ',  b.State,', ', b.Zip,'</label>',
    '<div>&#9733;&#9733;&#9733;', '</div>'
     );
  return html.join('');
}