// const express = require('express');
// const router = express.Router();
// // const burger = require("../models/burger.js");
// const connection = require('../config/connection.js')
const db = require("../models");
let burgerMap;
module.exports = (app) => {
    app.get("/", (req, res) => {
        db.Burger.findAll({}).then(function (result) {
            burgerMap = result.map(x => x.dataValues);
            res.render("index", { burger: burgerMap });
        });
    });

    app.post("/burger", (req, res) => {
        db.Burger.create({
            burger_name: req.body.burger,
        }).then(function (result) {
            res.redirect("/");
        });
    });

    app.put("/whattheF/:id", (req, res) => {
        console.log(req.body);
        db.Burger.update({
            devoured: 1,
        }, {
                where: {
                    id: req.params.id,
                }
            }).then(function (result) {
                res.redirect(303, "/");
            });
    });
};