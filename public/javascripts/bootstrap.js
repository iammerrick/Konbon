require.config({
    paths: {
        'underscore' : 'vendor/underscore',
        'backbone' : 'vendor/backbone',
        'jquery' : 'vendor/jquery'
    }
});

require(['app/app'], function(Router){
    new Router();
    Backbone.history.start();
});
