const express = require("express");
const Router = express.Router();
const Member = require("../model/memberModel");

//Get all members
Router.get("/members", async(req, res) => {
    const member = await Member.find({});
    res.send(member);
});

//Gets the member by their UID
Router.get("/member/:uid", async(req, res) => {
    const uid = req.params.uid.toString();
    const member = await Member.find({"uid":uid});
    res.send(member);
});

//Posting and initializing new members
Router.post("/members", async(req, res) => {
    let newMember = new Member({
        uid: req.body.uid,
        firstname: encrypt(req.body.firstname),
        lastname: encrypt(req.body.lastname),
        start: req.body.start,
        clubs: req.body.clubs,
        email: encrypt(req.body.email)
    });

    await newMember.save();

    res.redirect("/members")
});

module.exports = Router