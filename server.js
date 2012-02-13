var matador = require('matador'),
	Q = global.Q = require('Q'),
	mongoose = global.mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/konbon');

app.configure(function () {
  app.set('models', __dirname + '/app/models')
  app.set('helpers', __dirname + '/app/helpers')
  app.set('views', __dirname + '/app/views')
  app.set('controllers', __dirname + '/app/controllers')

  app.set('view engine', 'html')
  app.register('.html', matador.engine)

  app.use(matador.cookieParser())
  app.use(matador.bodyParser())
  app.use(matador.methodOverride())
  app.use(matador.static(__dirname + '/public'))
})

app.configure('development', function () {
  app.use(matador.errorHandler({ dumpExceptions: true, showStack: true }))
})

app.configure('production', function () {
  app.use(matador.errorHandler())
})

app.set('viewPartials', matador.partials.build(app.set('views')))

matador.mount(require('./app/config/routes'))

module.exports = app;
