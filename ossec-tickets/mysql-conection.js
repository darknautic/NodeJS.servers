

/*
 * $ env | grep node
 * NODE_PATH=/usr/lib/nodejs:/usr/lib/node_modules:/usr/share/javascript
 * $ sudo npm install node-mysql
 * $ cd /usr/lib/
 * $ sudo npm install node-mysql
 * $ cd node_modules/
 *
 * $ cd /home/s47id/nodeJS.servers
 * $  nodejs mysql-conection.js
 *
 * ############################################
 *
 *$ cd /home/s47id/nodeJS.servers
 * $ sudo npm install node-mysql
 * $ $ cp -R  ./node_modules/node-mysql/node_modules/mysql ./node_modules/mysql
 * 
https://github.com/felixge/node-mysql


*/   


var mysql = require('mysql');

var connection = mysql.createConnection({
    host : 'localhost',
    user : 'sajid',
    password : 'qazwsx',
    database : 'db1'
});

connection.connect();

var showTable07 = function(){    
    conn.query('select a,b,c from table07',function(err,rows,fields){
    if (err) {
            console.log("Error in show table 07 : " + err)
        }
 //   return JSON.stringify(rows);
    return "helllllooooo!!!";
    //return  rows;
    
    });
    };

connection.query('select a,b,c from table07',function(err,rows,fields){
    if(err) throw  err;
    console.log('Resultset Length : '+ rows.length);
    console.log('\n');
    for (i=0; i < rows.length; i++) {
        console.log('row[%d] : ',i,rows[i]);
        }

    });




console.log("\n");
console.log("ookokok: ");
console.log(showTable07(connection));

//exports.showTable07 = showTable07;
  
    
    
var RUNbySeven = function (value,offset){
this.offset = offset;
return (value+offset)*7;
};

exports.RUNbySeven =  RUNbySeven;





/*
//http://stackoverflow.com/questions/16264162/return-rows-with-nodejs-and-node-mysql
// mysql.js    
exports.allRows = function(cb) {
  //var connection = getConnection();
  connection.query('select a,b,c from table01', function (err, rows, fields) {
    // close connection first
    //closeConnection(connection);
    // done: call callback with results
    cb(err, rows);
  });
};


// app.js
//app.get("/continents", function(request, response) {
  database.allRows(function(err, results) {
    if (err)
      throw err; // or return an error message, or something
    else
      res.send(results); // as a demo, we'll send back the results to the client;
                         // if you pass an object to 'res.send()', it will send
                         // a JSON-response.
  });
//});

*/
connection.end();
