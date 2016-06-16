var express = require('express');
var app = express();


app.use(express.static(__dirname + '/../site'));
 
// app.get('/', function (req, res) {
//   res.send('Hello World')
// });

var port = Number(process.env.PORT || 30008)
 
app.listen(port);