var dispatcher = require("../dispatcher");

module.exports = {
    loginData:function(login){
        dispatcher.dispatch({
            login:login,
            type:"login:loginData"
        });
    },
    signup:function(data){
        dispatcher.dispatch({
            data:data,
            type:"data:loginData"
        });
    },
    deleteSchool:function(school){
        dispatcher.dispatch({
            school:school,
            type:"school:deleteSchool"
        });
    }
};