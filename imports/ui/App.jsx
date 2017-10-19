import React, {Component} from 'react';

import Dialogs from './Dialogs.jsx';
import SendArea from './SendArea.jsx';

import AccountsUIWrapper from './AccountsUIWrapper.jsx';

import './app.css';
import ContactList from './contactlist.jsx';

export default class App extends Component{
  render(){
    return(
    	<div className="chatroomspace">
    		<AccountsUIWrapper />

    		<div>
    			<div className="contactspace">
    				<div id="filter"></div>
    				<div id="people">

                        <ContactList />
                        
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
