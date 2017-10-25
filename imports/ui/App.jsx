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

import ReactDOM from 'react-dom';

const util = require('util');

let newCurrentUser, newAllUsers;

class App extends Component{

    constructor(props){
        super(props);
        this.state={
            currentUser:{},
            currentChat:{
                username:"",
                _id:""
            },
            allUsers:{}
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
      newAllUsers=nextProps.allUsers;

      //console.log("newCurrentUser:::"+util.inspect(newCurrentUser , false, null))

      //console.log("this.props:::"+util.inspect(this.props , false, null))

      this.setState({
        currentUser:newCurrentUser,
        allUsers:newAllUsers,
      });
    }

    handleSelectUser(user){
      this.setState({
        currentChat: user,
      })
    }

    handleSubmit(event){
      //event.preventDefault();

      // Find the text field via the React ref
      const text = document.getElementById('textinput').value;
      const owner = this.state.currentUser;
      const recipient= this.state.currentChat;

      //console.log("handleSubmit:Meteor.userId():::"+Meteor.userId());
      console.log('owner:::'+util.inspect(owner , false, null));
      console.log("recipient:::"+util.inspect(recipient , false, null));

      if(Meteor.userId() && text){

        DialogServer.insert({
            text: text,
            owner: owner,
            recipient: recipient,
            createdAt: new Date(), // current time
        });

        // Clear form
        document.getElementById('textinput').value = '';
      }
    }

    renderDialogItems(){

      let selectedMessages=this.props.messages.map((message)=>{
        if(message.owner._id==this.state.currentUser._id && message.recipient._id==this.state.currentChat._id){
          return message
        }
      })

      return (
        selectedMessages.map((message)=>(
          <DialogItem key={item._id} message={message}/>
        ))
      )
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
              <ContactList
                currentUser={this.state.currentUser}
                currentChat={this.state.currentChat}
                allUsers={this.props.allUsers}
                onSelectUser={this.handleSelectUser} />
    				</div>
    			</div>

			    <div className="dialogspace">
			        <Dialogs currentUser={this.state.currentUser}
                      currentChat={this.state.currentChat}/>
			        <SendArea className="sendarea"
                      onSubmit={this.handleSubmit}/>
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
