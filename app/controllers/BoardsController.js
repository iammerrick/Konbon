module.exports = require(app.set('controllers') + '/ApplicationController').extend()
  .methods({
    index: function () {
      this.json({
          "name" : "my-board",
          "columns" : [
              {
                  "id" : "1",
                  "name" : "Design"
              },
              {
                  "id" : "2",
                  "name" : "Development"
              },
              {
                  "id" : "3",
                  "name" : "QA"
              }
          ]
      });
    }
  })


