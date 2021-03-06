import { Meteor } from 'meteor/meteor';

// Meteor already has a collection called users, we just wrap that in a
// collection for clients to reactively observe changes.
//
// If we didn't want the reactive changes, we could just use methods by
// themselves, but since we like reactivity, we'll take advantage of the
// client's minimongo to track changes and allow views to subscribe to those
// changes.
//

if(Meteor.isClient) {
  export const Users = new Meteor.Collection('reactiveUsers');
}
