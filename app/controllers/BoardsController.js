module.exports = require(app.set('controllers') + '/ApplicationController').extend()
	.methods({
		
		index: function(){
			this.render('boards/index', {
				title: 'Konbon'
			});
		},

		view: function(){
			var Board = this.getModel('Board'),
				self = this;

			Board.findOne({ uri : this.request.param('uri') }, function(error, instance){
				if(error){
					console.log(error);
					self.error();
				}
				self.json(instance);
				
			});
		},

		new: function(){
			var self = this;
			
			this.getModel('Board')
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
