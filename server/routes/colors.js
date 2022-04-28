var express = require("express");
var mongodb = require("mongodb");

var router = express.Router();
var data = [];

var MongoClient = mongodb.MongoClient;

var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
    if(err) {
        throw err;
    } else {
        console.log("Connected to ", url);

        var database = db.db("ColorsDB");

        database.collection("ColorsCollection").find({}).toArray(function(err, res) {
            if(err) {
                throw err;
            } else {
                data = res;
            }
            db.close();
        })
    }
})

router.get("/", function(req, res, next) {
    res.send(data);
});

module.exports = router;