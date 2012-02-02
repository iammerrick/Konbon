define(['jquery', 'underscore', 'backbone'], function($, _, Backbone){

    var Router = Backbone.Router.extend({

        routes : {
            "" : "index"
        },

        index: function(){
            console.log("run");
        }

    });

    return Router;
});
