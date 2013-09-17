	// servidor 
var http = require("http");

http.createServer(function(request, response) {
  	response.writeHead(200, {"Content-Type": "text/html"});
  	response.write("PasteBin-Websocket+nodeJS >> code.inMotion");
  	response.end();
	}).listen(7878);



// pasando funciones como valor
function decir(palabra) {
  console.log(palabra);
}


function ejecutar(algunaFuncion, valor) {
  algunaFuncion(valor);
}

ejecutar(decir, "Hola");