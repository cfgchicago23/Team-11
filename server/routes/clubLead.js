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

Router.put('/clubleads/requests/:uid', async (req, res) => {
    try {
        console.log(req)
        const { uid } = req.params;
        const { requests } = req.body;

        const clubLead = await ClubLead.findOne({ uid: uid });
        if (!clubLead) {
            return res.status(404).json({ message: 'Club Lead not found' });
        }

        clubLead.requests.push(...requests); // Append new requests to existing ones
        await clubLead.save();

        res.json({ message: 'Requests updated successfully', clubLead });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
});


module.exports = Router
