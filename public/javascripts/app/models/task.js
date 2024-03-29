define(['jquery', 'underscore', 'backbone', 'moment'], function($, _, Backbone, moment){

    var Task = Backbone.Model.extend({
		
		urlRoot: '/tasks',

		display: function(){
			var json = this.toJSON()
				total = 0;
			
			// Never have an orphaned word
			json.description = json.description.replace(/\s([^\s<]+)\s*$/,'&nbsp;$1');
			
			// Make start date readable
			json.started = moment(json.started).format('MMMM D');

			// Calculate costs
			_(json.items).each(function(item){
				var started = moment(item.started),
					finished = moment(item.finished);
				
				// Decide the item cost
				item.cost = moment(finished).diff(started, 'days');

				// Add that cost to the total
				total += item.cost;
			});

			// Assign total
			json.total = total;

			return json;
		}

    });

   return Task; 
});

