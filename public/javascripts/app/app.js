define(['jquery', 'backbone', 'app/views/board'], function($, Backbone){

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
