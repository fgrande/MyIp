exports.index = function(request, response) {

  var utils = require("../common/utils.js");
  if (request.headers['user-agent'].indexOf("curl") >= 0) {
    response.send(utils.getAllData(request).remoteIp);
  }
  else {
    response.render('index', { title : "What is MyIp ?", 
                               header : "My public IP Address is...", 
                               website : "myip.cloudno.de",
                               data : utils.getAllData(request)});
  }
}



exports.curl = function(request, response) {

  var utils = require("../common/utils.js");
  var jdata = utils.getAllData(request);
  response.render('curl', { title : "What is MyIp ?", 
                            header : "Something about cURL...",
                            website : "myip.cloudno.de",
                            dataxml : utils.getAllDataFormatted(jdata, "xml"),
                            dataplain : utils.getAllDataFormatted(jdata, ""),
                            data : jdata });

}

