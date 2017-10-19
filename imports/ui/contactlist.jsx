import React, {Component} from 'react';
import { Meteor } from 'meteor/meteor';
import ContactItem from './contactitem.jsx';
import Test from './test.jsx';

export default class ContactList extends Component{
	constructor(props){
		super(props);

		this.getContactItems=this.getContactItems.bind(this);
	}

	getContactItems(){
		//let allUsersData = Meteor.users.find({}).fetch(); //Array(0)

		let allUsersData = [
			{_id:1, userName:"AAA"},
			{_id:2, userName:"BBB"},
			{_id:3, userName:"CCC"},
			{_id:4, userName:"DDD"},
		]

		/**
		allUsersData.map((userData)=>(
				<ContactItem key={userData._id} userName={userData.username}/>
		))
		**/

		allUsersData.map(function(userData){
			console.log(userData.userName);
			return(
				<ContactItem key={userData._id} userName={userData.userName}/>
			)
		})

	}

	render(){
		return(
			<ul>
				{this.getContactItems()}
				<Test/>
			</ul>
		)
	}
}