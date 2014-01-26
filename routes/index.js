exports.index = function(request, response) {

  var utils = require("../common/utils.js");
  if (request.headers['user-agent'].indexOf("curl") >= 0) {
    response.send(utils.getAllData(request).remoteIp);
  }
  else {
    response.render('index', { title: "Titolo !", 
                               test : "Prova", 
                               website : global.website,
                               data : utils.getAllData(request)});
  }
}



exports.curl = function(request, response) {

  var utils = require("../common/utils.js");
  response.render('curl', { title: "Titolo !", 
                            test : "Prova", 
                            website : global.website,
                            data : utils.getAllData(request)});

}

