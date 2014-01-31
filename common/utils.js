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
  	      "via" : request.headers['via'],
  	      "headers" : request.headers
  	    };
  	    
  return obj;
}


exports.getAllDataFormatted = function(pJSonData, pFormat) {

  var retObj;
  
  switch (pFormat) {
    case "json" :
    	    retObj = pJSonData;
    	    break;
    case "xml" :
    	    // XML Format

            var plainArr = getKeys(pJSonData);
            var tempArr = new Array();
            
            tempArr.push("<data>");
            for (var property in plainArr) {
              tempArr.push("  <" + property + ">" + plainArr[property] + "</" + property + ">");
            }
            tempArr.push("</data>");
            
            retObj = tempArr.join("\n");

    	    break;
    default : 
            // Plain Text
            
            var plainArr = getKeys(pJSonData);
            var tempArr = new Array();
            
            for (var property in plainArr) {
              tempArr.push(property + ": " + plainArr[property]);
            }
            
            retObj = tempArr.join("\n");
            
            break;
  }
  return retObj;
}





var getKeys = function(pObject) {

  var arr = new Array();
  var keys = Object.keys(pObject);
 
  for (var i = 0, l = keys.length; i < l; i++) {
    var key = keys[i];
    var obj = pObject[key];
    
    if (typeof obj == 'object' && Object.keys(obj) != null) {
      var tempArr = getKeys(obj);
      for (var property in tempArr) {
      	arr[property] = tempArr[property];
      }
    }
    else {
      arr[key] = obj;
    }
  }
  
  return arr;
}



exports.getContentType = function(pFormat) {

  var _type = "text/plain";
  
  switch (pFormat) {
    case "json" :
    	    _type = "application/json";
    	    break;
    case "xml" :
    	    _type = "text/xml";
    	    break;
  }

  return _type;
  
}


