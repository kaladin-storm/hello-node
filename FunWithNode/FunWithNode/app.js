console.log('Hello world');


//require doesn't care about file, it just looks for msgs even if it folder or file
var msgs = require("./msgs.js");
var msg = new msgs();
console.log(msg.first);


var logger = require("./logger");
logger.log("this is from the logger");

var _ = require("underscore");
