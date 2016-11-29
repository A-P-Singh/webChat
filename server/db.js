
var mongoose = require('mongoose');     //Import the mongoose module
var db = 'mongodb://localhost/chatDB';              //Change database name here
var mongoOption = {db:{safe:true}};
mongoose.connect(db ,mongoOption, function(err, res){
 if(err){
        console.log('There is an error in database connection');
    }
    else{
        console.log(' database connection........');
    }
});
var user = new mongoose.Schema({
    email:String,
    password :String,
    name :String,
    gender :String,
    DOB : {type: Date, default: Date.now }
});

var users = mongoose.model('user', user);
