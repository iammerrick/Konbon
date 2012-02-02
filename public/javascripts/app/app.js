define(['jquery', 'backbone', 'app/views/board', 'app/collections/tasks', 'app/models/board'], function($, Backbone, BoardView, TasksCollection, Board){

    var App = Backbone.Router.extend({

        routes : {
            "" : "index"
        },

        index: function(){
            new BoardView({
                collection: TasksCollection,
                model: (new Board({ id: 12 }))
            });
        }

    });

    return App;
});
