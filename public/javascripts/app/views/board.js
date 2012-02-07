define(['jquery', 'backbone', 'app/views/task', 'app/models/task'], function($, Backbone, TaskView, Task){

    var BoardView = Backbone.View.extend({

		initialize: function(){
            var self = this;

			_(this).bindAll('render');

			this.model.bind('change', this.render);

            this.model.fetch();
        },

        render: function(){
			this.createColumns();
            return this;
        },

		createColumns: function(){
			// Iterate through columns
			_(this.model.get('columns')).each(function(column){
				
				// Make the headers
				$('.headers').append('<li>'+column.name+'</li>');
				

				// Make the column and append to DOM
				var $column = $('<div class="column" data-column-id="'+column._id+'" />');
				$('.columns').append($column);
				
				_(column.tasks).each(function(task){
					var taskView = new TaskView({
						model: new Task({ id : task})
					});
					
					$column.append(taskView.el);
				});
			});
		}
    });

    return BoardView;
});

