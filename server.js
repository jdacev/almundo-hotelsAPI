var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Task = require('./api/models/hotelModel'),
  bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/almundodb');


//Set CORS header and intercept "OPTIONS" preflight call from AngularJS
var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    if (req.method === "OPTIONS") 
        res.sendStatus(200);
    else 
        next();
}


app.use(allowCrossDomain);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./api/routes/hotelsRoutes');
routes(app);

app.use(function(req, res) {
  res.status(404).send({url: 'La URL que ingresaste no existe. ' + req.originalUrl })
});

app.listen(port);

console.log('Almundo Hoteles. API-REST por Jorge Dacev \nServidor iniciado en: ' + port + '\n\n');
