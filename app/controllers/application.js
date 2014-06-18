export default Ember.ObjectController.extend({
  dbRef: null,
  auth: null,
  
  createFirebase: function(){
    this._super();
    
    var dbRef = this.get('container').lookup('adapter:application').get('firebase'),
        auth = new window.FirebaseSimpleLogin(dbRef, function(error, user) {});
    
    this.set('auth', auth);
    
  }.on('init')
});