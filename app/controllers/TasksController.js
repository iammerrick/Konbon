module.exports = require(app.set('controllers') + '/ApplicationController').extend()
	.methods({
		
		index: function(){
			this.json({'status' : 'success'});
		},

		view: function(){
			var Task = this.getModel('Task'),
				self = this;

			Task.findOne({
					_id : this.request.param('id')
				}, function(error, task){
					if(error){
						return self.error();
					}
					
					self.json(task);
				});
		},

		new: function(){
			var self = this;
			
			this.getModel('Task')
				.create(this.request.body)
				.then(function(){
					self.response.send({
						status: 'successful'
					})
				})
				.fail(function(error){
					self.error();
				})
				.end();
		}
	});
