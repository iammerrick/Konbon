module.exports = Class(function(options){
	cradle = require('cradle');

	this.connection = new(cradle.Connection)(options.url, 5984, {
		      cache: true,
		      raw: false
		  	});
}).methods({
		createDB: function(database){
			var db = this.connection.database(database);
			db.create();
		}
	});