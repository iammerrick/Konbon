define(['jquery', 'backbone', 'app/views/board', 'app/collections/tasks', 'app/models/board'], function($, Backbone, BoardView, TasksCollection, Board){

    var App = Backbone.Router.extend({

        routes : {
            'view/:id' : 'view'
        },

		view: function(id){
            new BoardView({
                model: (new Board({ id: id }))
            });
        }

    });

    return App;
});
