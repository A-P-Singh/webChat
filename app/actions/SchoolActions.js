var dispatcher = require("../dispatcher");

module.exports = {
    addSchool:function(school){
        console.log('...schoolAction.js=====addSchool====..school....'+JSON.stringify(school));
        dispatcher.dispatch({
            school:school,
            type:"school:addSchool"
        });
    },
    signup:function(data){
        console.log('...schoolAction.js=====signup====..data....'+JSON.stringify(data));

        dispatcher.dispatch({
            data:data,
            type:"data:addSchool"
        });
    },
    deleteSchool:function(school){
        console.log('...schoolAction.js=====deleteSchool====..school....'+JSON.stringify(school));
        dispatcher.dispatch({
            school:school,
            type:"school:deleteSchool"
        });
    }
};