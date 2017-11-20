import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
    // this.route('index', {path: '/'}) // Auto/implied
    this.route('orders', {path: '/orders'})
    // this.route('orders') // Shorthand also works when template and route have same name
    // Note, this also does not actually mention the template orders...
        // it is a *URL path and an application route
});

export default Router;


// N.B.
// $ ember generate route <name>
    // adds this.routh(...) above
    // adds a <name>.js to routes/
    // adds a <name>.hbs to templates/
// **
