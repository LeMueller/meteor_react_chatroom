import React, {Component} from 'react';

import Dialogs from './Dialogs.jsx';
import SendArea from './SendArea.jsx';

import AccountsUIWrapper from './AccountsUIWrapper.jsx';

import './app.css';

export default class App extends Component{
  render(){
    return(
    	<div className="chatroomspace">
    		<AccountsUIWrapper />

    		<div>
    			<div className="contactspace">
    				<div id="filter"></div>
    				<div id="people">
    					<ul id="person">
    						<li>一</li>
    						<li>二</li>
    						<li>三</li>
    						<li>四</li>
    					</ul>
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
