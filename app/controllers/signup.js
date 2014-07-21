export default Ember.ObjectController.extend({
	needs: ['application'],
	auth: Ember.computed.alias('controllers.application.auth'),
	email: '',
	password: '',
	actions: {
		signMeUp: function(model) {
			var auth = this.get('auth'),
				email = this.get('email'),
				password = this.get('password');

			auth.createUser( email, password, function(error, user) {
				if (!error) {
					console.log('User ID: ' + user.uid + ',\n Email: ' + user.email);
				} else {
					alert('Error when signing up: ' + error);
				}
			});
		}
	}
});
