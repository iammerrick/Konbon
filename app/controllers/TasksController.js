module.exports = require(app.set('controllers') + '/ApplicationController').extend()
  .methods({
    index: function () {
      this.json([ 
              {
                    "description" : "Write a twitter connector", 
                    "started" : "Started January 2",
                    "items" : [
                        {
                            "item" : "Development",
                            "cost" : "3 Days"
                        },
                        {
                            "item" : "Design",
                            "cost" : "9 Days"
                        }
                    ],
                    "total" : "12 Days",
                    "responsible" : "Merrick Christensen"
              },
              {
                    "description" : "Write a twitter connector", 
                    "started" : "Started January 2",
                    "items" : [
                        {
                            "item" : "Development",
                            "cost" : "3 Days"
                        },
                        {
                            "item" : "Design",
                            "cost" : "9 Days"
                        }
                    ],
                    "total" : "12 Days",
                    "responsible" : "Merrick Christensen"
              }

          ]);
    }
  })

