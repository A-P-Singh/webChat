var dispatcher = require("../dispatcher");
var $ = require("jquery");
var resourceUrl = "http://localhost:7777/api/schools";
var loginUrl = "http://localhost:7777/api/login";

function SchoolStore() {
    var listeners = [];
    var schools = [];
    function getSchools() {
        return schools;
    }
    function onChange(listener) {
        listeners.push(listener);
    }
    function addSchool(school) {
        schools.push(school);
        triggerListeners();
    }
    function deleteSchool(school) {
        var _index;
        schools.map(function (s, index) {
            if (s.name === school.name) {
                _index = index;
            }
        });
        schools.splice(_index, 1);
        triggerListeners();
    }
    function triggerListeners() {
        listeners.forEach(function (listener) {
            listener(schools);
        });
    }
    dispatcher.register(function (payload) {
        console.log('...schoolStore.js..===payload..==..'+JSON.stringify(payload));
        var split = payload.type.split(":");

        console.log('...schoolStore.js..===split..==..'+JSON.stringify(split));
        if(split[0] === "data") {
            alert("SSSSSSSSSSSSS");
            var saveData = $.ajax({
                type: 'POST',
                url: resourceUrl,
                data: payload,
                dataType: "json",
                success: function (err, resultData) {

                    console.log('...schoolStore.js..===resultData..==..' + JSON.stringify(resultData));

                    alert("Save Complete")
                },
                error: function(er,data){
                    alert("Errorrrrrrr");
                }
            });
        }
 //...................................

        if(split[0] === "school") {
            alert("=========loginUrl========");
            var loginData = $.ajax({
                type: 'POST',
                url: loginUrl,
                data: payload,
                dataType: "json",
                success: function (err, resultData) {
                    if(err){
                        console.log('...schoolStore.js..===err..==..' + JSON.stringify(err));
                        alert("loginUrl.....err.......");
                    }else{
                        console.log('...schoolStore.js..===resultData..==..' + JSON.stringify(resultData));
                        alert("loginUrl.....success.......");
                    }
                },
                error: function(er,data){
                    alert("Errorrrrrrr");
                }
            });
        }


//..............................................

        if (split[1] === "school") {
            switch (split[1]) {
                case "addSchool":
                    addSchool(payload.school);
                    break;
                case "deleteSchool":
                    deleteSchool(payload.school);
                    break;
            }
        }
    });

    return {
        getSchools: getSchools,
        onChange: onChange
    }
}

module.exports = SchoolStore();