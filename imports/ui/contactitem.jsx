import React, {Component} from 'react';

export default class ContactItem extends Component{
	constructor(props){
		super(props);

		alert("this.props.userName:::"+this.props.userName);

	}

	render(){

		console.log("this.props.userName:::"+this.props.userName);

		return(
			<li>
				{this.props.userName}
			</li>
		)
	}
}