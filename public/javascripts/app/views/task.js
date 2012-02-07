define(['jquery', 'backbone', 'hogan', 'text!app/templates/task.mustache'], function($, Backbone, Hogan, template){

    var TaskView = Backbone.View.extend({
		
        template: Hogan.compile(template),

		initialize: function(){
			this.model.bind('change', this.render, this);
			this.model.fetch();
		},

        render: function(){
            var html = this.template.render(this.model.display());
            this.$el.html(html);
            return this;
        }
    });

    return TaskView;
});


