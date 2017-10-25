import React, {Component} from 'react';
import { Meteor } from 'meteor/meteor';


import './dialogItem.css';

export default class DialogItem extends Component{
  constructor(props){
    super(props);

    this.isOwnMessage=this.isOwnMessage.bind(this);
  }

  isOwnMessage(){

    let sender;
    if(this.props.message.owner._id == Meteor.userId()){
      sender="self";
    }else{
      sender="you";
    }

    return sender;
  }


  render(){

    return(
      <div className={this.isOwnMessage()}>
        {this.props.message.text}
      </div>
    )
  }
}
