var React = require("react");
var actions = require("../actions/SchoolActions");


//..... Login...........

module.exports = React.createClass({
    getInitialState:function(){
        return {
            EmailId:"",
            pwd:""
        }
    },
    addSchool:function(e){
        e.preventDefault();
        actions.addSchool(this.state);
    },
    handleInputChange:function(e){
        e.preventDefault();

        var name = e.target.name;
        var state = this.state;
        state[name] = e.target.value;
        console.log('...login.js..==state.==..'+JSON.stringify(state));
        this.setState(state);
    },
    render:function(){
        return(
            <form className="form" onSubmit={this.addSchool}>
                <div className="form-group">
                    <label className="control-label" htmlFor="EmailId">EmailId:</label>
                    <input type="text" className="form-control" id="EmailId" name="EmailId" value={this.state.name} onChange={this.handleInputChange} placeholder="EmailId" />
                </div>
                <div className="form-group">
                    <label className="control-label" htmlFor="pwd">pwd</label>
                    <input type="text" className="form-control" id="pwd" name="pwd" value={this.state.address} onChange={this.handleInputChange} placeholder="pwd" />
                </div>
                <div className="form-group">
                    <button className="btn" type="submit">Login</button>
                </div>
            </form>

        )
    }
});