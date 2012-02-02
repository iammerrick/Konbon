define(['jquery', 'backbone', 'app/views/board', 'app/collections/tasks'], function($, Backbone, BoardView, TasksCollection){

    var App = Backbone.Router.extend({

        routes : {
            "" : "index"
        },

        index: function(){
            new BoardView({
                collection: TasksCollection
            });
        }

    });

    return App;
});
