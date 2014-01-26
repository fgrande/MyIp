var express = require('express');
var hbs = require('hbs');
var path = require("path");

global.utils = require("./common/utils.js");
global.website = "myip.cloudno.de";

hbs.registerPartials(__dirname + '/views/partials');

var routes = require("./routes");
var data = require("./routes/data.js")
var test = require("./routes/test.js")

var port = process.env["app_port"] || 9646; // 9634

var app = express();

app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');
app.set("trust proxy", true);
app.use(app.router);
app.use(express.static(path.join(__dirname, "public")));

app.get('/', routes.index);
app.get('/curl', routes.curl);
app.get('/ip/:format?', data.ip);
app.get('/port/:format?', data.port);
app.get('/host/:format?', data.host);
app.get('/all/:format?', data.all);



app.get('/test', test.test);
app.get('/temp', data.temp);


/*app.get('/:format(ip|ua|host)', function(request, response) {
  var agent = useragent.parse(request.headers['user-agent']);
  var fmt = request.params.format || "XYZ";

  response.json({ "remoteAddress" : request.ip,
  		  "remotePort" : request.connection.remotePort,
                  "agent" : agent.toJSON(), 
                  "format" : fmt
                });
});
*/

app.use(function(req, res) {
  //res.send('404: Invalid Request !!', 404);
  res.redirect("/curl");
});


app.listen(port, function() {
  console.log("Listening on ", port);
});
