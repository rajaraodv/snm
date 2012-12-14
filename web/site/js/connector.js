var dataServerAddress = "http://50.116.14.106:9999/";

function getMapData( loc, radius, filters, query, cb ) {
  var locString;
  console.log("getMapData called!");
  // set defaults
  if (!radius) {
    radius = 5;
  }
  locString = JSON.stringify( loc );
  data = {
    loc: locString,
    radius: radius,
    filters: filters,
    query: query
  }
  $.post( dataServerAddress + "getMap", JSON.stringify(data), cb )
}

function postReview( businessId, reviewText, cb ) {
  pass;
}
