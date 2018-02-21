const express = require('express');
const path = require('path');
const users = require('./routes/users');
var cors = require('cors');
const app = express();
app.use(cors());
var MongoClient = require('mongodb').MongoClient
MongoClient.connect('mongodb://localhost:27017/test', function (err, db) {
  if (err) throw err
    
  global.db = db.db("test");
  
})

app.get('/getusers', users.getusers);

app.listen(4000, () => console.log('Node server 4000!'))