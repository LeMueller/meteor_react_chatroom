import React, {Component} from 'react';
import { Meteor } from 'meteor/meteor'
import ContactItem from './contactitem.jsx';
import Test from './test.jsx';

const util = require('util')

export default class ContactList extends Component{
	constructor(props){
		super(props);

		this.getContactItems=this.getContactItems.bind(this);
	}

	changeCollection(name){
		name = new Mongo.Collection(name);
	}

	getContactItems(){

		
		let allUsersData = [
			{_id:1, userName:"AAA"},
			{_id:2, userName:"BBB"},
			{_id:3, userName:"CCC"},
			{_id:4, userName:"DDD"},
		]
		

		//let allUsersData = Meteor.users.find({}).fetch();
		//console.log(Meteor.users.find({"_id":"AAA"}).fetch());
		//console.log(util.inspect(Meteor.user(), false, null));
		/**
		allUsersData.map((userData)=>(
				<ContactItem key={userData._id} userName={userData.username}/>
		))
		**/
		//console.log("Meteor.userName:::"+ Meteor.users);

		let items = allUsersData.map(function(userData){
			if(userData.userName==Meteor.user()){

			}else{
				return(
					<ContactItem key={userData._id} userName={userData.userName} />
				)
			}
			
		})



		return items;

	}

	render(){
		return(
			<ul>
				{this.getContactItems()}	
			</ul>
		)
	}
}