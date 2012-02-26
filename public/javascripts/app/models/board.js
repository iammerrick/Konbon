define(['underscore', 'backbone'], function(_, Backbone){

    var Board = Backbone.Model.extend({
        urlRoot : '/boards',
        
        addColumn: function(name){
            var columns = this.get('columns');
            columns.push({
                name : name,
                tasks: []
            });
            
            this.set('columns', columns);
            
            this.save();
        }
    });

   return Board; 
});


