var express = require('express'); 
var server = express();

var bp = require('body-parser');
server.use(express.static(__dirname+'/client'));
server.use(bp.json());
server.use(bp.urlencoded({extended:true}));
server.listen(5000,function(){console.log("Server running")});