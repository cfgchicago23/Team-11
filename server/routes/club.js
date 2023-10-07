const express = require("express");
const Router = express.Router();
const Club = require("../model/clubModel");

// Router.get("/club", async(req, res) => {
//     res.send("Welcome to the club page");
// });

Router.get("/club/:location", async(req, res) => {
    const location = req.params.location.toString();
    console.log(location);
    const member = await Club.find({"location":location});
    res.send(member);
});

Router.post("/club", async(req, res) => {
    console.log(req.body)
    let club = new Club({
        uid: req.body.uid,
        name: req.body.name,
        location: req.body.location,
        lid: req.body.lid,
        members: req.body.members
    });

    await club.save();
});

module.exports = Router