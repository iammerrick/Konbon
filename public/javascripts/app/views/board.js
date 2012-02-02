define(['jquery', 'backbone', 'app/views/task'], function($, Backbone, TaskView){

    var BoardView = Backbone.View.extend({
        el: '.columns',
        initialize: function(){
            _(this).bindAll('render');
            this.collection.fetch();
            this.collection.bind('reset', this.render);
        },

        render: function(){
            var self = this;
            this.collection.each(function(task){
                self.$('.column').append(new TaskView({ model : task}).render().el);
            });

            return this;
        }
    });

    return BoardView;
});

