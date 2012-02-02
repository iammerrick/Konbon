module.exports = require(app.set('controllers') + '/ApplicationController').extend({})
  .methods({
    index: function () {
	    this.json({"tasks" : [ {"description" : "Write a twitter connector", "started" : "Started January 2"}]});

	  	var config = require('../config/db');
	  	var model = require('../models/Task');

	  	var mytask = new model({"url": config.url});
	  	
		//just testing
	    mytask.createDB('testing');
	}
})