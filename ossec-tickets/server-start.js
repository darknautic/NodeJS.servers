var  server = require('./server');
var router = require('./router');
var requestHandlers =  require('./requestHandlers');


var handle = {}
handle["/"] = requestHandlers.index;
handle["/index.html"] = requestHandlers.index;
handle["/css/style.css"] = requestHandlers.style;
handle["/js/script.js"] = requestHandlers.script;
handle["/start"] = requestHandlers.start;
handle["/upload"] = requestHandlers.upload;
handle["/json"] = requestHandlers.json;


server.start(router.route,handle);

