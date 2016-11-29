var mongoose = require('mongoose');
var mongodb = require('mongodb');
var Server = mongodb.Server;
var   Db = mongodb.Db;
var   BSON = mongodb.BSONPure;
var userInfo = mongoose.model('user');

//.....Login.............
exports.login = function(req,res){
    console.log('.....login===req.body======'+JSON.stringify(req.body));
    var email = req.body.login.EmailId;
    var password = req.body.login.pwd;
    userInfo.find({},function(err,data){
        if(err){
            console.log('.....err====='+JSON.stringify(err));
            res.send(err);

        }else{
            console.log('.....data====='+JSON.stringify(data));
            res.json({success:true, msg:'success',"data":data});
        }
    });
};
//.....Save Sign up data.............
exports.saveUserInfo = function(req, res){
    var email = req.body.data.Email;
    var name = req.body.data.Name;
    var password = req.body.data.Password;
    var gender = req.body.data.Gender;
    var DOB = req.body.DOB;
	console.log('req........'+JSON.stringify(req.body));
    var userDetail = new userInfo({
        email : email,
        password : password,
        name : name,
        gender : gender,
        DOB : DOB
    });
    userDetail.save(function(err){
        if(err){
            console.error(err);
           console.log('EEEEERRROOORRRR........');
        }
        	console.log('successSSSSSS........');
       res.json({success:true, msg:'success'});
    });
};
