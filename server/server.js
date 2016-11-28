var express = require("express");
var path = require("path");

var app = express();
var bodyParser = require('body-parser');
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));
app.use(express.static(path.join(__dirname,"../app/dist")));

app.post('/api/schools', function(req, res){

    console.log('...server.js..===req..==..'+JSON.stringify(req.body));

    // var email = req.param('email', null);  // second parameter is default

    res.send({"result":"success"});
});

app.listen(7777,function(){
    console.log("Started listening on port", 7777);
});
