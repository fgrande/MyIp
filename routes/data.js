exports.ip = function(request, response) {
  response.send(utils.getAllData(request).remoteIp);
}

exports.port = function(request, response) {
  response.send(utils.getAllData(request).remotePort);
}

exports.host = function(request, response) {
  response.send(utils.getAllData(request).host);
}



exports.all = function(request, response) {
  var fmt = request.params.format || "";
  response.send(utils.getAllDataFormatted(request, fmt, false));
}




exports.temp = function(request, response) {
  
	response.send(utils.getAllData(request));
	/*
  var useragent = require("useragent");
  var agent = useragent.parse(request.headers['user-agent']);
  var fmt = request.params.format || "XYZ";

  response.json({ "remoteAddress" : request.ip,
  		  "remotePort" : request.connection.remotePort,
                  "agent" : agent.toJSON(), 
                  "format" : fmt,
                  "headers" : request.headers
                });  */
}