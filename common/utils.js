exports.getAllData = function(request) {

  var useragent = require("useragent");

  var agent = useragent.parse(request.headers['user-agent']);
  
  var obj = { "remoteIp" : request.ip ? request.ip : "N.A.",
  	      "remotePort" : request.connection.remotePort ? request.connection.remotePort.toString() : "N.A.",
  	      "uaStr" : request.headers['user-agent'],
  	      "ua" : agent,
  	      "host" : request.headers['host'],
  	      "connection" : request.headers['connection'],
  	      "accept" : request.headers['accept'],
  	      "encoding" : request.headers['accept-encoding'],
  	      "language" : request.headers['accept-language'],
  	      "headers" : request.headers
  	    };
  	    
  return obj;
}


exports.getAllDataFormatted = function(request, pFormat, pForDisplay) {

  var allData = this.getAllData(request);
  return allData;
}



