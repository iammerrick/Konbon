define(['jquery', 'backbone', 'app/views/task'], function($, Backbone, TaskView){

    var BoardView = Backbone.View.extend({
        el: '.columns',
        initialize: function(){
            var self = this;

            _(this).bindAll('render');

            this.collection.bind('reset', this.render);

            this.model.bind('change', function(){
                self.collection.fetch();
            });

            this.model.fetch();
        },

        render: function(){
            var self = this;
            _(this.model.get('columns')).each(function(column){
                $('.headers').append($('<li />').text(column.name));
                var columnEl = $('<div class="column" data-column-id="'+column.id+'"/>');
                var columnTasks = self.collection.filter(function(task){
                    return task.get('column') === column.id;
                });
                _(columnTasks).each(function(task){
                    columnEl.append(new TaskView({ model : task}).render().el);
                });
                self.$el.append(columnEl);
            });

            return this;
        }
    });

    return BoardView;
});

