const express = require('express');
const users = require('./routes/users');
var cors = require('cors'); //for cross domain issue
var bodyParser = require('body-parser'); //for handling form post data
const app = express();

app.use(cors());
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

var MongoClient = require('mongodb').MongoClient
MongoClient.connect('mongodb://localhost:27017/test', function (err, db) {
  if (err) throw err 
  global.db = db.db("test");
})

app.get('/users/get', users.get);
app.post('/users/create', users.create);
app.put('/users/update', users.update);
app.delete('/users/delete/:id', users.delete);

app.listen(4000, () => console.log('Node server 4000!'))