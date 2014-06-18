export default Ember.Route.extend({
  model: function(params, transition){
    var self = this;
    // you can skip calling back with a local property
    return Ember.$.getJSON('/auth').then(function(result){
      if(!result.good){
        self.transitionTo('login');
      }
      return result;
    });
  }
});