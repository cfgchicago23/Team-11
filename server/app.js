//-Express
const express = require('express')
const app = express()
const port = 3000
var bodyParser = require('body-parser')

//-MongoDB

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://testuser:KFGLlFvJ01ojPswM@team11.8jevc3m.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });

// async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     // Send a ping to confirm a successful connection
//     // await client.db("admin").command({ ping: 1 });

//     await client.db("CFG").command({ ping: 1 });


//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);

//-Mongoose
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
  });

app.get("/", (req, res) => {
    res.send("Hello");
})

mongoose.connect(uri,{
  useNewUrlParser: true,
  useUnifiedTopology:true
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Mongoose Connected Successfully");
});

mongoose.set('strictQuery', true);

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(require("./routes/member"));
