//-Express
const express = require('express')
const app = express()
const port = 3000
var bodyParser = require('body-parser')

//-MongoDB

// load env
require('dotenv').config();

let mongo_pwd = process.env.MONGO_PWD;
const uri = "mongodb+srv://testuser:" + mongo_pwd + "@team11.8jevc3m.mongodb.net/?retryWrites=true&w=majority";

//-Mongoose
const mongoose = require('mongoose');

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
  });

app.get("/", (req, res) => {
    res.send("Hello");
})
//Mongoose connections
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
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Require the routes
app.use(require("./routes/member"));
app.use(require("./routes/club"));
app.use(require("./routes/clubLead"));