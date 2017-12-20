var path = require('path');
var express = require('express');

var app = express();

app.use(express.static(path.resolve(__dirname, "www")));

app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'), function() {
 console.log("listening to port: ", app.get("port"));
});