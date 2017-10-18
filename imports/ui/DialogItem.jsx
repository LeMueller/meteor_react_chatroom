import React, {Component} from 'react';


import './dialogItem.css';

export default class DialogItem extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className={this.props.item.sender}>
        {this.props.item.text}
      </div>
    )
  }
}
