const express = require("express");
const Router = express.Router();
const Member = require("../model/memberModel");


// Router.get("/login", async(req, res) => {
//     const member = await Member.find({"id":"0"});
//     console.log(member);
//     res.send(member);
// });

Router.get("/member", async(req, res) => {
    // var name = req.query.name;
    var uid = req.query.uid

    let newMember = new Member({
        uid: req.query.uid,
        firstname: req.query.firstname,
        lastname: req.query.lastname,
        start: req.query.start,
        clubs: req.query.clubs,
        email: req.query.email
    });

    await Member.create(newMember);

    res.send(newMember)
});

// Router.post('/members', async (req, res) => {
//     //we want to create a new member and return the new member document back to the use (which includes the id)
//     //the member information (fields) will be passed in via the JSON request body
//     let newMember = new Member({
//         uid: req.query.uid,
//         firstname: req.query.firstname,
//         lastname: req.query.lastname,
//         start: req.query.start,
//         clubs: req.query.clubs,
//         email: req.query.email
//     });
//     await newMember.save().then((memberDoc) => {
//         //the full list doc is returned (incl. id)
//         res.send(memberDoc);
//     })
//   });
  

// Router.put("/member", async(req, res) => {
//     // var name = req.query.name;
//     var uid = req.query.uid
//     const person = new Member({"uid":uid})
//     console.log(person)
//     try {
//         await Member.insertOne(person);
//         res.send({ "uid": uid });
//     }
//     catch(error){
//         res.status(500).send(error);
//         console.log("FAIL")
//     }
// });

// Router.get("/login/:name", async(req, res) => {
//     const name = req.params.name;
//     // console.log("connected")
//     // console.log(name)
//     const user = await User.find({"username":name});
//     res.send(user);
// });

module.exports = Router