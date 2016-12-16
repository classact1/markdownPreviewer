var React = require('react');
require('./css/markdown.css');
var marked = require('marked');

marked.setOptions({
      gfm: true,
      tables: true,
      breaks: false,
      pedantic: false,
      sanitize: true,
      smartLists: true,
      smartypants: false
    });

var Markdown = React.createClass({
   render: function(){
       return(
           <div id="markdown" dangerouslySetInnerHTML={{__html: marked(this.props.value)}}></div>
        );
   }
    
});

module.exports = Markdown;  