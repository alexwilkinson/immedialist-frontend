import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('listItems', { path: '/' }, function(){
    this.route('show', { path: '/:listItem_id' });
  });
});

export default Router;
