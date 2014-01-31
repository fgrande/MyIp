exports.ip = function(request, response) {
  var utils = require("../common/utils.js");
  response.send(utils.getAllData(request).remoteIp);
}

exports.ua = function(request, response) {
  var utils = require("../common/utils.js");
  var fmt = request.params.format || "";

  response.send(fmt == "json" ? utils.getAllData(request).ua : utils.getAllData(request).uaStr);
}

exports.port = function(request, response) {
  var utils = require("../common/utils.js");
  response.send(utils.getAllData(request).remotePort);
}

exports.language = function(request, response) {
  var utils = require("../common/utils.js");
  response.send(utils.getAllData(request).language);
}

exports.connection = function(request, response) {
  var utils = require("../common/utils.js");
  response.send(utils.getAllData(request).connection);
}

exports.encoding = function(request, response) {
  var utils = require("../common/utils.js");
  response.send(utils.getAllData(request).encoding);
}

exports.accept = function(request, response) {
  var utils = require("../common/utils.js");
  response.send(utils.getAllData(request).accept);
}

exports.via = function(request, response) {
  var utils = require("../common/utils.js");
  response.send(utils.getAllData(request).via);
}

exports.all = function(request, response) {
  var utils = require("../common/utils.js");
  var fmt = request.params.format || "";
  response.contentType(utils.getContentType(fmt));
  response.send(utils.getAllDataFormatted(utils.getAllData(request), fmt));
}




