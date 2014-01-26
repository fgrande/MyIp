exports.index = function(request, response) {

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

  response.render('curl', { title: "Titolo !", 
                            test : "Prova", 
                            website : global.website,
                            data : utils.getAllData(request)});

}
