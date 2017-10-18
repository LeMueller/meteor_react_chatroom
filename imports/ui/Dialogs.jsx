import React, {Component} from 'react';
import './dialogs.css';

import {DialogServer} from './dialogServer.js';

import {createContainer} from 'meteor/react-meteor-data';

import DialogItem from './DialogItem.jsx';

class Dialogs extends Component{

  constructor(props){
    super(props);

    this.renderDialogItems=this.renderDialogItems.bind(this);    
  }

  /**
  getDialogs() {
    return [
      { _id: 1, text: 'This is task 1' },
      { _id: 2, text: 'This is task 2' },
      { _id: 3, text: 'This is task 3' },
    ];
  }
  **/

  renderDialogItems(){

    return (
      this.props.dialogItems.map((item)=>(
        <DialogItem key={item._id} item={item}/>
      ))
    )
  }

  render(){
    return(
      <div className='dialogs'>
        {
          this.renderDialogItems()
        }
      </div>
    )
  }
}

export default createContainer(()=>{

  return{
    dialogItems: DialogServer.find({}).fetch(),
  };
}, Dialogs);
