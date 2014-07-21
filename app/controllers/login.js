export default Ember.ObjectController.extend({
  needs: ['application'],
  auth: Ember.computed.alias('controllers.application.auth'),
  actions: {
    logMeIn: function(model){
      var auth = this.get('auth');
      
      auth.login('password', {
        email: model.get('email'),
        password: model.get('password'),
        rememberMe: model.get('rememberMe')
      });
	  model.setProperties({
		  'email': '',
		  'password': '',
		  'rememberMe': false
	  });
    },
	loginTwitter: function() {
		var auth = this.get('auth');

		auth.login('twitter');
	}
  }
});
