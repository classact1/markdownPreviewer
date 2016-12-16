var React = require('react');
var ReactDOM = require('react-dom');

//module requires
var TextInput = require('./textinput');
var Markdown = require('./markdown');
require('./css/index.css');

var Container = React.createClass({
    getInitialState: function(){
        return {value: "Heading\n=======\n\nSub-heading\n-----------\n \n### Another deeper heading\n \nParagraphs are separated\nby a blank line.\n\nLeave 2 spaces at the end of a line to do a  \nline break\n\nText attributes *italic*, **bold**, \n`monospace`, ~~strikethrough~~ .\n\nShopping list:\n\n  * apples\n  * oranges\n  * pears\n\nNumbered list:\n\n  1. apples\n  2. oranges\n  3. pears\n\nThe rain---not the reign---in\nSpain.\n\n *[Herman Fassett](https://freecodecamp.com/hermanfassett)*"};
    },
    
    render: function(){
        return (
            <div>
                <TextInput passValue={this.passValue} value={this.state.value}/>
                <Markdown value={this.state.value}/>
            </div>
            
        )
    },
    
    //grabbing value from TextInput component
    passValue: function(val){
        this.setState({
            value: val
        })
    }
    
});

ReactDOM.render(<Container/>, document.getElementById('container'));