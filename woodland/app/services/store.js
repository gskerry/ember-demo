import Ember from 'ember'

export default Ember.service.extend({
    getOrders(){
        return [
            {id: '1', name:'Jake'},
            {id: '2', name:'Greg'}
        ]
    }
})
