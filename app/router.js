import Ember from 'ember';

var Router = Ember.Router.extend({
  location: FireGlassENV.locationType
});

Router.map(function() {
  this.route('login');
  this.resource('auth', {path:'auth'}, function(){
    
  });
});

export default Router;
