// /* MEMBER ROUTES */
// /**
//  * GET /member
//  * Purpose: Get all member
//  */


// app.get('/members', (req, res) => {
//     //we want to return an array of all lists in database
//     Member.find({
//         _userId: req.user_id
//     }).then((members) => {
//         res.send(members);
//     }).catch((e) => {
//         res.send(e);
//     });
// })


// /**
//  * POST /member
//  * Purpose: Add a member to the database
//  */


// app.post('/members', (req, res) => {
//     //we want to create a new member and return the new member document back to the use (which includes the id)
//     //the member information (fields) will be passed in via the JSON request body
//     let title = req.body.title;
   
//     let newList = new Member({
//         title,
//         _userId: req.user_id
//     });
//     newList.save().then((listDoc) => {
//         //the full list doc is returned (incl. id)
//         res.send(listDoc);
//     })
// });


// /**
//  * PATCH /member/:id
//  * Purpose: Update a specified member
//  */


// app.patch('/members/:id', (req, res) => {
//     // //we want to update the specified member (member document with id in the URL) with the new values specified in the JSON body of the request
//     Member.findOneAndUpdate({ _id: req.params.id, _userId: req.user_id }, {
//         $set: req.body
//     }).then(() => {
//         res.send({ 'message': 'updated successfully' });
//     });
// });


// /**
//  * DELETE /member/:id
//  * Purpose: Delete a member
//  */


// app.delete('/members/:id', authenticate, (req, res) => {
//     //we want to delete the specified member (document with id in the URL)
//     Member.findOneAndRemove({
//         _id: req.params.id,
//         _userId: req.user_id
//     }).then((removedListDoc) => {
//         res.send(removedListDoc);
//         deleteTasksFromList(removedListDoc._id);
//     })
// });
