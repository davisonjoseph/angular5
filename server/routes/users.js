
module.exports = {
    getusers: function(req, res) {
        global.db.collection("users",function(err, collection){
            collection.find().toArray(function(err, data){
                res.statusCode=200;
                res.setHeader('content-type', 'application/json');
                res.send(data);
            });
        });
    }
}
