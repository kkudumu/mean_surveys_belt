//import our models logic.
var mongoose = require('mongoose');
var path = require('path');
var fs = require('fs');
var models_path = path.join(__dirname, '../models');

//set global promise for async operation
mongoose.Promise = global.Promise;

//connect to our database
mongoose.connect('mongodb://localhost/survey');

//find models files in filesystem
fs.readdirSync(models_path).forEach(file => {
  if (file.indexOf('.js') >= 0) {
    require(path.join(models_path, file));
  }
});