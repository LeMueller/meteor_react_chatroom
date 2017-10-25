import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import { Meteor } from 'meteor/meteor';

import {DialogServer} from './dialogServer.js';

export default class SendArea extends Component{

	constructor(props){
	    super(props);

	     
	}

	handleSubmit(event) {
	    event.preventDefault();
	 
	    // Find the text field via the React ref
	    const text = ReactDOM.findDOMNode(this.refs.textInput).value.trim();

	    if(Meteor.userId())
	 
	    DialogServer.insert({
	      	text: text,
	      	owner: Meteor.userId(),           // _id of logged in user
      		username: Meteor.user().username,  // username of logged in user
	      	createdAt: new Date(), // current time
	    });
	 
	    // Clear form
	    ReactDOM.findDOMNode(this.refs.textInput).value = '';
	}

	

	render(){
	    return(
	      <div>
	      	<form className="new_message" onSubmit={this.handleSubmit.bind(this)}>
		        <input id="textinput" type='text' ref="textInput" placeholder="message to send"/>
		        <button onClick={this.handleSubmit.bind(this)}>send</button>
	        </form>
	      </div>
	    )
	 }
}
