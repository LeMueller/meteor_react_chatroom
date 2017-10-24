import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import { ContactList } from './contactlist.jsx';

export default createContainer(({ params }) => {
  const subscription = Meteor.subscribe('allUsers');
  const loading = !subscription.ready();
  const allUsersData = Meteor.users.find().fetch();

  return { loading, allUsersData };
}, ContactList);