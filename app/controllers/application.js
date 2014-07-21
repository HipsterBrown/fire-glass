export default Ember.ObjectController.extend({
  dbRef: null,
  auth: null,
  loggedIn: Ember.computed.bool('user.name'),
  user: Ember.Object.create({
	name: null,
	pic: null
  }), 
  createFirebase: function(){
    this._super();

	var dbRef = this.get('container').lookup('adapter:application').get('firebase'),
		app = this,
        auth = new window.FirebaseSimpleLogin(dbRef, function(error, user) {
			if (!error && user !== null) {
				console.log(user);
				app.set('user.name',  user.username || user.email.split('@', 1) );
				if (user.thirdPartyUserData) {
					app.set('user.pic', user.thirdPartyUserData.profile_image_url);
				} else {
					app.set('user.pic', 'http://placehold.it/100.png/');
				}
				app.transitionTo('application');
			} else {
				console.log('Error: ' + error);
			}	
		});
    
    this.set('auth', auth);
    
  }.on('init'),
  actions: {
	logout: function() {
		var auth = this.get('auth');

		auth.logout();
		this.set('user.name', null);
		this.set('user.pic', null);
		console.log('This user has been logged out');
		this.transitionTo('login');
	}
  }
});
