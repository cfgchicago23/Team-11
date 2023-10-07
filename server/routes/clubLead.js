const express = require("express");
const Router = express.Router();
const ClubLead = require("../model/clubLeadModel");

Router.post("/clublead", async(req, res) => {
    let clubLead = new ClubLead({
        uid: req.body.uid,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        start: req.body.start,
        clubs: req.body.clubs,
        email: req.body.email
    });

    await clubLead.save();

    res.redirect("/clublead")
});

module.exports = Router