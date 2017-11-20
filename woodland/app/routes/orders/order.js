import Ember from 'ember'

export default Ember.Route.extend({
    model(params){ // very similar to server-side router (e.g. express)
        return [
            {id: '1', name:'Jake'},
            {id: '2', name:'Greg'}
        ].findBy('id', params.order_id) // *ember-proivded method
    }
})
