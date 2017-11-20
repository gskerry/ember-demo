import Ember from 'ember'

export default Ember.Route.extend({
    model(){
        return [
            {id: '1', name:'Jake'},
            {id: '2', name:'Greg'}
        ]
    }
/*
    model is primary
    others:
    activate(){}
    deactivate(){}
    redirect(){}
*/
})
