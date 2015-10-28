
var express    = require('express');
var app        = express();
var bodyParser = require('body-parser');
var morgan     = require('morgan');
var mongoose   = require('mongoose');

var db         = require('./config/db.config');
var config     = require('./config/server.config');
var port       = config.port;

mongoose.connect(db.db);

app.use(bodyParser.urlencoded({
  extended: false,
}));
app.use(bodyParser.json());

app.use(morgan('dev'));

var routes = require('./app/routes/server.route');
app.use('/', routes);

app.listen(port);
console.log('The app is running on port:' + port);
