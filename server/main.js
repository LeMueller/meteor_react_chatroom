import { Meteor } from 'meteor/meteor';
import '../imports/ui/dialogServer.js';

Meteor.startup(() => {
  // code to run on server at startup

  /**
  Meteor.publish('allUsers', function(){

  	return Meteor.users.find({},{
  		fields:{
  			_id:1,
  			username:1
  		}
  	});
  });
  **/

});
