const express = require("express");
const Router = express.Router();
const Club = require("../model/clubModel");

Router.post("/club", async(req, res) => {
    console.log(req.body)
    let club = new Club({
        uid: req.body.uid,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        start: req.body.start,
        clubs: req.body.clubs,
        email: req.body.email
    });

    await club.save();
    res.redirect("/club")
});

module.exports = Router