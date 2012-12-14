function start() {
  var connect = require('connect');
  connect().use(
    connect.static(__dirname)
  ).listen(80);
  console.log('Site available at port 80');
}

exports.start = start;
