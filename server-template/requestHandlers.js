var exec = require('child_process').exec;


function start(response){
    console.log("handler : request handler  \"Start\" was called ..");
    exec("find /", { timeout: 10000, maxBuffer: 20000*1024 },function(error,stdout,stderr){
        response.writeHead(200,{"Content-Type": "text/plain"})
        response.write(stdout);
        response.end(); 
        });
    
    
    function sleep(milliSeconds) {
        var startTime = new Date().getTime();
        while (new Date().getTime() < startTime + milliSeconds); 
        }
    
    /*
    sleep(10000);
    response.writeHead(200,{"Content-Type": "text/plain"})
    response.write("Hello Start");
    response.end();
    */
    
}

function upload(response){
    console.log("handler : request handler  \"Upload\" was called ..");
    response.writeHead(200,{"Content-Type": "text/plain"})
    response.write("Hello Upload");
    response.end(); 
    
}


exports.start = start;
exports.upload = upload;
