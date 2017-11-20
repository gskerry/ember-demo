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
    
});

export default Router;
