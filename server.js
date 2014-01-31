var express = require('express');
var hbs = require('hbs');
var path = require("path");

hbs.registerPartials(__dirname + '/views/partials');

hbs.registerHelper('json', function(context) {
  var tStr = JSON.stringify(context, null, 4);
  return tStr;
});

var routes = require("./routes");
var data = require("./routes/data.js");

var port = process.env["app_port"] || 9646; // 9634

var app = express();

app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');
app.set("trust proxy", true);
app.use(app.router);
app.use(express.static(path.join(__dirname, "public")));

app.get('/', routes.index);
app.get('/curl', routes.curl);
app.get('/ip', data.ip);
app.get('/ua/:format(json)?', data.ua);
app.get('/port', data.port);
app.get('/lang', data.language);
app.get('/conn', data.connection);
app.get('/enc', data.encoding);
app.get('/mime', data.accept);
app.get('/via', data.via);
app.get('/all/:format(json|xml)?', data.all);

app.use(function(req, res) {
  //res.send('404: Invalid Request !!', 404);
  res.redirect("/curl");
});


app.listen(port, function() {
  console.log("Listening on ", port);
});
