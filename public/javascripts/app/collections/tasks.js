define(['jquery', 'underscore', 'backbone', 'app/models/task'], function($, _, Backbone, Task){

    var TasksCollection = Backbone.Collection.extend({
        url: '/tasks',
        model: Task
    });

   return (new TasksCollection); 
});
