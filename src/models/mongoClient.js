var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var Users = new Schema({
  name    : String,
  projects: [Projects]
});

var Projects = new Schema({
  name    : String,
  url     : String
});

exports.User = function() {
  return Users;
};
  // User = mongoose.model('Users', Users);
Project = mongoose.model('Projecs', Projects);
// };

mongoose.connect('mongodb://localhost/SampleMocha'); 

// var user = mongoose.model('Users', Users);
// var instance = new user();
// instance.name = 'midori';
// instance.save();
