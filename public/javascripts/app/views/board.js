define([
		'jquery', 
		'backbone', 
		'app/views/task',
		'app/views/emptytask',
		'app/models/task'
	], 
	function(
		$, 
		Backbone, 
		TaskView,
		EmptyTaskView,
		Task
	){

    var BoardView = Backbone.View.extend({

		el: 'body',

		events: {
			'click .add-column' : 'add'
		},

		initialize: function(){
            var self = this;

			_(this).bindAll('render', 'addInputKeyup');

			this.model.bind('change', this.render);

            this.model.fetch();
        },

        render: function(){
			
			this.createColumns();

            return this;
        },

		add: function(e){
			e.preventDefault();
			
			if ( ! this.addColumnEl) {
				var input = $('<li><input type="text" placeholder="New Column Name" /></li>');
				input.on('keyup', 'input', this.addInputKeyup);
				input.insertBefore(this.$('.headers .last'));
			
				this.addColumnEl = input;
			} else {
				this.addColumnEl.find('input').focus();
			}
		},
		
		
		addInputKeyup: function(e){
			var value;
			
			if(e.keyCode === 13) {
				value = this.addColumnEl.find('input').val();
				this.model.addColumn(value);
				this.addColumnEl.remove();
			}
		},
		
		/*
			TODO Delegate to two sub views, one for header one for body
			both should reference the same collection, and events will 
			cascade to both.
		*/
		createColumns: function(){
			// Iterate through columns
			_(this.model.get('columns')).each(function(column){
				
				// Make the headers
				this.$('.headers').prepend('<li>'+column.name+'</li>');
				
				// Make the column and append to DOM
				var $column = $('<div class="column" data-column-id="'+column._id+'" />');
				this.$('.columns').prepend($column);
				
				if (column.tasks.length > 0) {
					_(column.tasks).each(function(task){
						var taskView = new TaskView({
							model: new Task({ id : task})
						});
					
						$column.append(taskView.el);
					});
				} else {
					var taskView = new EmptyTaskView();
					
					$column.append(taskView.render().el);
				}
			});
		}
    });

    return BoardView;
});

