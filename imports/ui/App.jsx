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

const util = require('util');

let newCurrentUser, newallUsers;

class App extends Component{

    constructor(props){
        super(props);
        this.state={
            currentUser:{},
            currentChat:{
                username:"",
                _id:""
            }
        }


    }

    componentDidMount(){

    }

    componentWillReceiveProps(nextProps){
      /**  while recieving nextProps，this.props.messages updated, this.props.currentUser not!!!
      console.log("receiveProps");
      console.log("nextProps::"+util.inspect(nextProps, false, null));
      console.log("this.props.currentUser::"+util.inspect(this.props.currentUser , false, null));
      console.log("this.props.messages::"+util.inspect(this.props.messages , false, null));
      console.log("nextProps.currentUser::"+util.inspect(nextProps.currentUser , false, null));
      console.log("this.props.currentUser::"+util.inspect(this.props.currentUser , false, null));
      **/

      newCurrentUser=nextProps.currentUser;
      newallUsers=nextProps.allUsers;

      //console.log("newCurrentUser:::"+util.inspect(newCurrentUser , false, null))

      //console.log("this.props:::"+util.inspect(this.props , false, null))

      this.setState({
        currentUser:newCurrentUser,
      });
    }


  render(){

    //console.log("this.state:::"+util.inspect(this.state , false, null));

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

  return {
    messages: DialogServer.find({}).fetch(),
    currentUser: Meteor.user(),
    allUsers: Meteor.users.find({}, { sort: { username: 1 } }).fetch(),
  };
}, App);

