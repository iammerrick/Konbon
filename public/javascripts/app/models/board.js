define(['underscore', 'backbone'], function(_, Backbone){

    var Board = Backbone.Model.extend({
        urlRoot : '/boards'
    });

   return Board; 
});


