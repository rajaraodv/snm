/* The API controller
   Exports 3 methods:
   * post - Creates a new thread
   * list - Returns a list of threads
   * show - Displays a thread and its posts
*/


var snapmapperC = require('../models/snapmapperC.js');

exports.post = function(req, res) {
  new snapmapperC({
    title: req.body.title,
    author: req.body.author
  }).save();
};

exports.list = function(req, res) {
  if(!req.query.lon || !req.query.lat) {
    res.send(404, {'error': 'please send lon and lat values'});
    return;
  }
  console.log(req.query.lon);
  console.log(req.query.lat);
  //please change 0.05 to whatever is comfortable max-distance value should be.
  var query = {loc: {$near: [req.query.lon, req.query.lat], $maxDistance : 0.05}};
  snapmapperC.find(query, function(err, businesses) {
    //allow local access
    res.header('Access-Control-Allow-Origin', '*');
    res.send(businesses);
  });
};