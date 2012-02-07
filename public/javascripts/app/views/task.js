define(['jquery', 'backbone', 'hogan', 'text!app/templates/task.mustache'], function($, Backbone, Hogan, template){

    var TaskView = Backbone.View.extend({
		
        template: Hogan.compile(template),

		initialize: function(){
			this.model.bind('change', this.render, this);
			this.model.fetch();
		},

        render: function(){
			console.log(this.model.toJSON());
            var html = this.template.render(this.model.toJSON());
            this.$el.html(html);
            return this;
        }
    });

    return TaskView;
});


