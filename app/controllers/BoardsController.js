module.exports = require(app.set('controllers') + '/ApplicationController').extend(function(){
		this.addBeforeFilter(['edit', 'view'], this.load);
	})
	.methods({
		
		index: function(){
			this.render('boards/index', {
				title: 'Konbon'
			});
		},

		view: function(){
			this.json(this.board);
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
		},
		
		edit: function(){
			
		},

		load: function(next){
			var Board = this.getModel('Board'),
				self = this;
			
			Board.findOne({ uri : this.request.param('uri') }, function(error, instance){
				if (error) {
					next(error);
				} else {
					self.board = instance;
					next(null);
				}
			});
		}
	});
