const express = require('express');
var router = express.Router();

// Requiring our Todo model
var db = require("../models");

// Create all our routes and set up logic within those routes where required.
router.get("/", function (req, res) {
    db.Burger.findAll()
        .then(function(data) {
            var hbsObject = {
                burger: data
            }
            
            res.render("index", hbsObject);

            console.log(data);
    });
});

router.post("/api/burger", function (req, res) {
    console.log("req.body", req.body);

    db.Burger.create({
      burger_name: req.body.burger_name,
      devoured: false
    }).then(function() {
      res.send(204).end();
    });
});

router.put("/api/burger/:id", function (req, res) {
    console.log("req.body", req.body);
    console.log("req.params", req.params);

    db.Burger.update({
        devoured: req.body.devoured,
      }, {
        where: {
          id: req.params.id
        }
      }).then(function() {
        res.send(204).end();
      })
});

router.delete("/api/burger/:id", function (req, res) {
    console.log("req.params", req.params);

    db.Burger.destroy({
        where: {
          id: req.params.id
        }
      }).then(function() {
        res.send(204).end();
      })
});

// Export routes for server.js to use.
module.exports = router;
