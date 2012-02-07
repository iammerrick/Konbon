define(['jquery', 'underscore', 'backbone'], function($, _, Backbone){

    var Task = Backbone.Model.extend({
		
		urlRoot: '/tasks'

    });

   return Task; 
});

