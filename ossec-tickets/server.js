
var http = require('http');
var url = require('url');

   //-----initials 
    var visits = 0;


function start(route,handle) {
    
    function  onRequest (request, response) {
        
        visits += 1; console.log("\nserver : Visit Number :"+ visits); 
        
        var pathname = url.parse(request.url).pathname;
        console.log("server : Request for : " + pathname + "  received. ");        
        route(handle,pathname,response);             
        
              
        
    }
    
    http.createServer(onRequest).listen(1337, '127.0.0.1');
    console.log('server : Server Running at http://127.0.0.1:1337/ \n');    
    
}



exports.start = start;

