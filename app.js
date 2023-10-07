//-Express
const express = require('express')
const app = express()
const port = 3000

// load env
require('dotenv').config();

//-MongoDB
let mongo_pwd = process.env.MONGO_PWD;
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://testuser:" + mongo_pwd + "@team11.8jevc3m.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    console.log();
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    // await client.db("admin").command({ ping: 1 });

    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);


//-Mongoose
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the user schema
const userSchema = new Schema({
  username: String
});

// Define the post schema, referencing the user schema
const postSchema = new Schema({
  title: String
});

// Define the User and Post models
const User = mongoose.model('User', userSchema);
const Post = mongoose.model('Post', postSchema);
app.get('/', (req, res) => {
  res.send('Hello World!')
})

//Test API Call from button on React Native
app.get("/test", (req, res) => {
  console.log("Data is being sent from the front end")
  res.send("Hello");
})

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
  });

