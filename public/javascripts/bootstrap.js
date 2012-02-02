require.config({
    paths: {
        'underscore' : 'vendor/underscore',
        'backbone' : 'vendor/backbone',
        'jquery' : 'vendor/jquery',
        'hogan' : 'vendor/hogan',
        'text' : 'vendor/text'
    }
});

require(['app/app'], function(App){
    new App();
    Backbone.history.start();
});
