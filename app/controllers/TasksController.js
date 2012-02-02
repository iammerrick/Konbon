module.exports = require(app.set('controllers') + '/ApplicationController').extend()
  .methods({
    index: function () {
      this.json({"tasks" : [ {"description" : "Write a twitter connector", "started" : "Started January 2"}]});
    }
  })

