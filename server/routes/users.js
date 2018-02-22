
//var mongodb = require('mongodb-wrapper');
var BSON = require('bson');

module.exports = {
    
    get: function(req, res) {
        global.db.collection("users",function(err, collection){
            collection.find().toArray(function(err, data){
                res.statusCode=200;
                res.setHeader('content-type', 'application/json');
                res.send(data);
            });
        });
    },

    create: function(req, res) {
        global.db.collection("users").insert(req.body,function(err, data){
            res.json(data)
        });
    },

    update: function(req, res) {
        var condition = {_id:new BSON.ObjectID(req.body.id)};
        var data = {name:req.body.data.name};

        global.db.collection("users").findOneAndUpdate(condition,{$set:data},function(err, data){
            res.statusCode=200;
            res.setHeader('content-type', 'application/json');
            res.send(data);
        });
    },

    delete: function(req, res) {
        var condition = {_id:new BSON.ObjectID(req.params.id)};
        console.log(condition);
        global.db.collection("users").deleteOne(condition,function(err, data){
            res.statusCode=200;
            res.setHeader('content-type', 'application/json');
            res.send(data);
        });
    }
}
