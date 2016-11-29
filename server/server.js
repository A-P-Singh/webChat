var express = require("express");
var path = require("path");
var app = express();
var bodyParser = require('body-parser');
app.use( bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));
require('./db');                                    // To access "db" file for schema.
var userDetails = require('./chat');  //To access ./routes/myMainLogic Pages.
app.use(express.static(path.join(__dirname,"../app/dist")));

//app.get('/', userDetails.LoginFunctioninRoutesPage);
app.post('/api/schools', userDetails.saveUserInfo);
app.post('/api/login', userDetails.login);

app.listen(7777,function(){
    console.log("Started listening on port", 7777);
});
