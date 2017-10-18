import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import {DialogServer} from './dialogServer.js';

export default class SendArea extends Component{

	constructor(props){
	    super(props);
	}

	handleSubmit(event) {
	    event.preventDefault();
	 
	    // Find the text field via the React ref
	    const text = ReactDOM.findDOMNode(this.refs.textInput).value.trim();
	 
	    DialogServer.insert({
	      text: text,
	      sender:"self",
	      createdAt: new Date(), // current time
	    });
	 
	    // Clear form
	    ReactDOM.findDOMNode(this.refs.textInput).value = '';
	}

	render(){
	    return(
	      <div>
	      	<form className="new_message" onSubmit={this.handleSubmit.bind(this)}>
		        <input type='text' ref="textInput" placeholder="message to send"/>
		        <button onClick={this.handleSubmit.bind(this)}>send</button>
	        </form>
	      </div>
	    )
	 }
}
