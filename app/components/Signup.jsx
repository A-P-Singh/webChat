var React = require("react");
var actions = require("../actions/SchoolActions");

//..... SignUp...........
module.exports = React.createClass({
    getInitialState:function(){
        return {
            Email:"",
            Name:"",
            Password:"",
            DOB:"",
            Gender:""
        }
    },
    signup:function(e){
        e.preventDefault();
        actions.signup(this.state);
    },
    handleInputChange:function(e){
        e.preventDefault();
        var name = e.target.name;
        var state = this.state;
        state[name] = e.target.value;
        console.log('...AddSchool.js..==e.target.==..'+JSON.stringify(e.target));
        this.setState(state);
    },
    render:function(){
        return(
            <form className="form" onSubmit={this.signup}>
                <div className="form-group">
                    <label className="control-label" htmlFor="Email">Email:</label>
                    <input type="text" className="form-control" id="Email" name="Email" value={this.state.name} onChange={this.handleInputChange} placeholder="Email" />
                </div>
                <div className="form-group">
                    <label className="control-label" htmlFor="Name">Name:</label>
                    <input type="text" className="form-control" id="Name" name="Name" value={this.state.address} onChange={this.handleInputChange} placeholder="Name" />
                </div>
                <div className="form-group">
                    <label className="control-label" htmlFor="Password">Password:</label>
                    <input type="text" className="form-control" id="Password" name="Password" value={this.state.address} onChange={this.handleInputChange} placeholder="password" />
                </div>
                <div className="form-group">
                    <label className="control-label" htmlFor="DOB">DOB:</label>
                    <input type="text" className="form-control" id="DOB" name="DOB" value={this.state.address} onChange={this.handleInputChange} placeholder="DOB" />
                </div>
                <div className="form-group">
                    <label className="control-label" htmlFor="Gender">Gender:</label>
                    <input type="text" className="form-control" id="Gender" name="Gender" value={this.state.address} onChange={this.handleInputChange} placeholder="Gender" />
                </div>
                <div className="form-group">
                    <button className="btn" type="submit">signUp</button>
                </div>
            </form>
        )
    }
});