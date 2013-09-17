console.log("Server Started..");

var http = require("http");
var mysql = require('mysql');
var url = require('url');


x = new Array(5);
x[0]=1; x[1]=2; x[2]=3; x[3]=4; x[4]=5;

var y = {
  L : {
     41 : 1,
     77 : 2,
    127 : 3
  },
  M : {
     34 : 1,
     63 : 2,
    101 : 3
  }
};



var cars = {
  ferrari : {
     'horses' : 900,
     'valve' : 2,
     'color' : 'red',
     'prize' : '2 millions'
  },
  mclaren : {
     'horses' : 700,
     'valve' : 17,
     'color' : 'black',
     'prize' : '1.7 millions'
  },
  GT1 : {
     'horses' : 1200,
     'valve' : 11,
     'color' : 'white',
     'prize' : '3.7 millions'
  }
};

var i = 0;

http.createServer(function(request, response) {  
                        //response.writeHeader(200, {"Content-Type": "text/html"});
                        //response.writeHeader(200, {"Content-Type": "application/json"});
                       /* response.writeHeader(200, {"Content-Type": "application/json",
                                                   "Access-Control-Allow-Origin" : "http://localhost:8787"});
                                                */
                        response.writeHeader(200, {"Content-Type": "application/json"});
                        response.writeHeader("Access-Control-Allow-Origin", "*");
                        response.writeHeader("Access-Control-Allow-Headers", "X-Requested-With");
                        /*
                         * using JSON.stringify to write back ( response.write ) to browser, that does Not matter !!
                         * if use application/json  or text/html , the output to be writted in browser is the same,
                         * but it is diferent handled by browser because the output font type  is changed when
                         * application/json is setted
                         * 
                         */
                        // Access-Control-Allow-Origin
                        
                        
                        //response.write("hi !!");
                        //response.write("<br>x : <br>");
                        var pathname = url.parse(request.url).pathname;
                        
                        if (pathname != "/favicon.ico"){
                                                console.log("\n");
                                                
                                                console.log(cars);                        
                                                //console.log(JSON.stringify(cars));
                                                //response.write("<br>");
                                                response.write(JSON.stringify(cars));
                           
                                                
                                                //response.write("<br>y : <br>");
                                                //response.write(y);
                                                //response.write(JSON.stringify(rows));
                                                //response.write(zip(rows));
                                                //i += 1;
                                                //console.log(i);
                        }
			response.end();	
    }).listen(8787);


