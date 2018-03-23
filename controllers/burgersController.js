const express = require('express');
const router = express.Router();
const burger = require("../models/burger.js");
const connection = require('../config/connection.js')

router.get("/", (req, res) => {
    burger.selectAll(function (data) {
        const hbsObject = {
            burger: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});


router.post("/burger", (req, res) => {
    burger.insertOne([
        "burger_name", "devoured"
    ], [
            req.body.burger, false
        ], function (result) {
            res.redirect('/');
        });
});

router.put("/devoured/:id", (req, res) => {
    const condition = "id = " + req.params.id;
    console.log("condition", condition);
    console.log(req.body);

    burger.updateOne({
        devoured: req.body.devoured
    }, condition, function (result) {
        if (result.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    })
});

module.exports = router;


