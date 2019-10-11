var path = require('path');
var express = require('express');

var app = express();

var staticPath = path.join(__dirname, '/app');
app.use(express.static(staticPath));

app.listen(8081, function() {
  console.log('listening on port 8081');
});
