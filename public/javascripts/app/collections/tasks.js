define(['jquery', 'underscore', 'backbone'], function($, _, Backbone){
    var TasksCollection = Backbone.Collection.extend({
        url: '/tasks'
    });

   return TasksCollection; 
});
