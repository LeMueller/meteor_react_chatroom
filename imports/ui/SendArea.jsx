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

		//show all users
		 let allUsersDate=Meteor.subscribe('allUsers'); //{subscriptionId: "4nHErSSjJLJesWJcq", stop: ƒ, ready: ƒ}
		 let allUsersD = Meteor.users.find({}).fetch(); //Array(0)

		console.log(allUsersDate);

		/** resulut of db.users.find()
			{ "_id" : "uFdKrgSyeBr6msxsH", "createdAt" : ISODate("2017-10-19T12:35:26.930Z"), "services" : { "password" : { "bcrypt" : "$2a$10$.LP2ftnNFDNx1gB7ouaMZ.OwXWLk89iDL6qjOuc.CVebtR/ziiv1K" }, "resume" : { "loginTokens" : [ ] } }, "username" : "AAA" }
			{ "_id" : "sJXS2YZ3vENHK2TYT", "createdAt" : ISODate("2017-10-19T12:35:46.266Z"), "services" : { "password" : { "bcrypt" : "$2a$10$TMbeew0aQ/L71YCHjSMoveyf3Kj7Vf0uNnZc7D0OnVtze.ZcuuoE6" }, "resume" : { "loginTokens" : [ { "when" : ISODate("2017-10-19T12:35:46.274Z"), "hashedToken" : "4WpMPUrqydYyKSStCWayBVubNKhgUiLmRio7N1902mg=" } ] } }, "username" : "BBB" }
		**/
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
