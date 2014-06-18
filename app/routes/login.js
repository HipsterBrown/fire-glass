export default Ember.Route.extend({
  model: function(){
    return this.store.createRecord('auth', {});
  },
  setupController: function(controller, model){
    return controller.set('model', model);
  }
});