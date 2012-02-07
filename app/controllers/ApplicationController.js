module.exports = require('matador').BaseController.extend(function () {
	 this.viewFolder = ''
	})
	.methods({
		getModel: function (name) {
			if (app.set('modelCache')[name]) return app.set('modelCache')[name]
			return (app.set('modelCache')[name] = (require(app.set('models') + '/' + name)))
		}
	});
