import React, {Component} from 'react';

export default class Test extends Component{
	constructor(props){
		super(props);

		//alert("test");

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