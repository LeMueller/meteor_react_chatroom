import React, {Component} from 'react';

import { PropTypes } from 'prop-types';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

import {DialogServer} from './dialogServer.js';

import Dialogs from './Dialogs.jsx';
import SendArea from './SendArea.jsx';

import AccountsUIWrapper from './AccountsUIWrapper.jsx';

import './app.css';
import ContactList from './contactlist.jsx';

const util = require('util')

class App extends Component{

    constructor(props){
        super(props);
        this.state={
            currentUser:this.props.currentUser,
            currentChat:{
                username:"",
                _id:""
            }
        }

    }

    componentDidMount(){

        console.log(this.state.currentUser);
       
    }

    componentWillReceiveProps(nextProps){
        console.log(this.state.currentUser);
    }


  render(){

    console.log(this.state.currentUser);

    return(
    	<div className="chatroomspace">
    		<AccountsUIWrapper />

    		<div>
    			<div className="contactspace">
    				<div id="filter"></div>
    				<div id="people">

                        <ContactList />
                        
    				</div>
    			</div>
    			
			    <div className="dialogspace">
			        <Dialogs/>
			        <SendArea className="sendarea"/>
			    </div>
    		</div>


      	</div>
    )
  }
}


App.propTypes = {
  messages: PropTypes.array.isRequired,
  currentUser: PropTypes.object,
};

export default createContainer(() => {
  //Meteor.subscribe('messages');
  //Meteor.subscribe('all_users');

  console.log("Meteor.user():::"+util.inspect(Meteor.user(), false, null));
  console.log("Meteor.users.find({}, { sort: { username: 1 } }).fetch():::"+util.inspect(Meteor.users.find({}, { sort: { username: 1 } }).fetch(), false, null));

  return {
    messages: DialogServer.find({}).fetch(),
    currentUser: Meteor.user(),
    allUsers: Meteor.users.find({}, { sort: { username: 1 } }).fetch(),
  };
}, App);

