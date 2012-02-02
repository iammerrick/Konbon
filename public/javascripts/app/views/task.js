define(['jquery', 'backbone', 'hogan', 'text!app/templates/task.mustache'], function($, Backbone, Hogan, template){

    var TaskView = Backbone.View.extend({
        template: Hogan.compile(template),
        render: function(){
            var html = this.template.render(this.model.toJSON());
            this.$el.html(html);
            return this;
        }
    });

    return TaskView;
});


