import React, {Component} from 'react';

import Dialogs from './Dialogs.jsx';
import SendArea from './SendArea.jsx';

export default class App extends Component{
  render(){
    return(
      <div className="dialogspace">
        <Dialogs/>
        <SendArea className="sendarea"/>
      </div>
    )
  }
}
