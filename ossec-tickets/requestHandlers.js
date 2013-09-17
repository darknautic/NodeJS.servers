var exec = require('child_process').exec;
var fs =  require('fs');

// index ------------------------------------------
function index(response){
    
    
    fs.readFile('./index.html',function(err,html){
        if (err) {
            console.log("handler : Error  in index handler  ..");        
            response.writeHead(404,{"Content-Type": "text/plain"});
            response.write("Not Found -error laoding file");
            response.end();
            throw err;
        } else {
            console.log("handler : request handler  \"Index\" was called ..");        
            response.writeHead(200,{"Content-Type": "text/html"})
            response.write(html);
            response.end();
        }
        
        
        });  
    
    
    //console.log("handler : request handler  \"index\" was called ..");        
    //response.writeHead(200,{"Content-Type": "text/plain"})
    //response.write("hello index");
    //response.end();
}





// style ------------------------------------------
function style(response){
    
    
    fs.readFile('./css/style.css',function(err,html){
        if (err) {
            console.log("handler : Error  in style handler  ..");        
            response.writeHead(404,{"Content-Type": "text/plain"});
            response.write("Not Found -error laoding file");
            response.end();
            throw err;
        } else {
            console.log("handler : request handler  \"style\" was called ..");        
            response.writeHead(200,{"Content-Type": "text/css"})
            response.write(html);
            response.end();
        }
        
        
        });  
    
    
    //console.log("handler : request handler  \"Style\" was called ..");        
    //response.writeHead(200,{"Content-Type": "text/plain"})
    //response.write("hello index");
    //response.end();
}

// style ------------------------------------------
function script(response){
    
    
    fs.readFile('./js/script.js',function(err,html){
        if (err) {
            console.log("handler : Error  in script handler  ..");        
            response.writeHead(404,{"Content-Type": "text/plain"});
            response.write("Not Found -error laoding file");
            response.end();
            throw err;
        } else {
            console.log("handler : request handler  \"script\" was called ..");        
            response.writeHead(200,{"Content-Type": "application/javascript"})
            response.write(html);
            response.end();
        }
        
        
        });  
    
    
    //console.log("handler : request handler  \"script\" was called ..");        
    //response.writeHead(200,{"Content-Type": "text/plain"})
    //response.write("hello index");
    //response.end();
}





// start ------------------------------------------
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

// upload ------------------------------------------
function upload(response){
    console.log("handler : request handler  \"Upload\" was called ..");
    response.writeHead(200,{"Content-Type": "text/plain"})
    response.write("Hello Upload");
    response.end(); 
    
}


function json(response){
    console.log("handler : request handler  \"JSON\" was called ..");
    var cars = {
            Ferrari : {
               'horses' : 900,
               'valve' : 2,
               'color' : 'red',
               'prize' : '2 millions'
            },
            McLaren : {
               'horses' : 700,
               'valve' : 17,
               'color' : 'black',
               'prize' : '1.7 millions'
            },
            Renault : {
               'horses' : 1200,
               'valve' : 11,
               'color' : 'white',
               'prize' : '3.7 millions'
            }
    };
    
    var y = [
        { 41 : 1, 77 : 2, 127 : 3 }, 
        { 34 : 1, 63 : 2, 101 : 3 }
    ];
    
    
    response.writeHead(200,{"Content-Type": "application/json"})
    response.write(JSON.stringify(cars));
    console.log(cars);
    response.end(); 
    
}






exports.index = index;
exports.style = style;
exports.script = script;
exports.start = start;
exports.upload = upload;
exports.json = json;
