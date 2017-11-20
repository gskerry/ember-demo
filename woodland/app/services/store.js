import Ember from 'ember'

export default Ember.Service.extend({
    getOrders(){
        return [
            {id: '1', name:'Jake'},
            {id: '2', name:'Greg'}
        ]
    },
    getOrderById(id){
        return this.getOrders().findBy('id', id);
        // findBy = ember-proivded method
    }
})
