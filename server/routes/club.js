const express = require("express");
const Router = express.Router();
const Club = require("../model/clubModel");

Router.post("/club", async(req, res) => {
    console.log(req.body)
    let club = new Club({
        uid: req.body.uid,
        name: req.body.name,
        location: req.body.location,
        lid: req.body.lid,
        clubs: req.body.clubs,
        members: req.body.members
    });

    await club.save();
    res.redirect("/club")
});

module.exports = Router