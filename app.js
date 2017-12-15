//import modules
const express = require('express');
app = express();
bodyParser = require('body-parser');
path = require('path');
port = 3500;
session = require('express-session')

//using our imports for our server
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public/dist'));
app.use(session({ secret: 'secretsecretigotasecret',
    resave: false,
    saveUninitialized: true
}));

//requiring routes
require('./server/config/manager');
require('./server/config/routes')(app);

//making sure app can listen on specified port
app.listen(port, function () {
console.log(`listening on port ${port}`);
});
