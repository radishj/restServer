var express = require("express");
var bodyParser = require("body-parser");
var couchbase = require("couchbase");

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

var cluster = new couchbase.Cluster("couchbase://localhost", {
    username: 'admin',
    password: 'asdfaf'});
var bucket = cluster.bucket('rest');
module.exports.bucket = bucket;
module.exports.cluster = cluster;
var routes = require("./routes.js")(app);
/*
var qs = "SELECT * FROM rest where 1";
var coll = bucket.defaultCollection();
let result = coll.query(qs, function(error, result){
    if(error){
        console.log(error);
        return error;
    }
    console.log(result.rows);
    return result;
})
let rows = result.rows;
*/

var server = app.listen(3001, function(){
    console.log("Listening on port %s...", server.address().port);
})