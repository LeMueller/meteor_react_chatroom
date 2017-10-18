import { Mongo } from 'meteor/mongo';

export const DialogServer = new Mongo.Collection('dialog');

//DialogServer.insert({ text: "Hello in code", createdAt: new Date() });

//alert("DialogServe.find():::"+DialogServer.find());
//alert("DialogServer.find():::"+typeof(DialogServer.find()));
