var React = require("react");
var AddSchool = require("./login.jsx");
var Signup = require("./Signup.jsx");

module.exports = React.createClass({
    render:function(){
        console.log('...SchoolList.jsx..===this.props..==..'+JSON.stringify(this.props));
        return(
            <div className="row">
                <div className="col-md-6">
                    <AddSchool />
                    <Signup />
                </div>
            </div>
        )
    }
});



