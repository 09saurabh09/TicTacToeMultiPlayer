/**
 * ScoreController
 *
 * @description :: Server-side logic for managing scores
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

var redis = require("redis"),
    client = redis.createClient(19348, "pub-redis-19348.ap-southeast-1-1.1.ec2.garantiadata.com");
    
    client.auth("Misys123$");

	    client.on("error", function (err) {
        console.log("Error " + err);
    });
    
     client.on("ready", function () {
        console.log("I m ready");
    });
    
module.exports = {


    create:function(req,res){
        client.set("string key", "string val", redis.print);
        client.hset("hash key", "hashtest 1", "some value", redis.print);
        client.hset(["hash key", "hashtest 2", "some other value"], redis.print);
        client.hkeys("hash key", function (err, replies) {
            console.log(replies.length + " replies:");
            replies.forEach(function (reply, i) {
                console.log("    " + i + ": " + reply);
            });
            client.quit();
        });
        res.send(200,"OK")
    }
};

