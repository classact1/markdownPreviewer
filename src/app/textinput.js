var React = require('react');
require('./css/textinput.css');

var TextInput = React.createClass({
    
    render: function(){
        return(
           <textarea name="" id="textInput" onChange={this.handleChange} ref="textInput" value={this.props.value}></textarea>
        );
    },
    
    handleChange(event) {
        
        //changing text area value with each key pressed
        this.setState({
            value: event.target.value
        });
        //passing value of TextInput component to parent
        this.props.passValue(this.refs.textInput.value);
    },
    
});

module.exports = TextInput;