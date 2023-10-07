const express = require("express");
const Router = express.Router();
const ClubLead = require("../model/clubLeadModel");

Router.get("/clublead", async(req, res) => {
    res.send("Welcome Club Lead");
});

Router.get("/clublead/:uid", async(req, res) => {
    const uid = req.params.uid.toString();
    const member = await ClubLead.find({"uid":uid});
    res.send(member);
});

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
