define([
		'jquery', 
		'backbone',
		'hogan',
		'text!app/templates/emptytask.mustache'
	], function(
		$, 
		Backbone,
		Hogan,
		template
	){

    var EmptyTaskView = Backbone.View.extend({
		
		template: Hogan.compile(template),

        render: function(){
            var html = this.template.render();
            this.$el.html(html);
            return this;
        }
    });

    return EmptyTaskView;
});


