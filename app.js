var express = require('express'),
  mongoose = require('mongoose'),
  models = require('./models'),
  db;

// create server object
app = exports.module = express.createServer();

//configure environments
app.configure('development', function(){
  app.set('m_database', 'bdd-sample-test');
  app.set('m_host', 'localhost');
  app.set('port', 9002);
  app.set('host', 'localhost');
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true })); 
});

app.configure('production', function(){
  app.set('m_database', 'bdd-sample');
  app.set('m_host', 'localhost');
  app.set('port', 9002);
  app.set('host', 'localhost');
  app.use(express.errorHandler()); 
});

//configure server instance
app.configure(function(){
  app.set('connstring', 'mongodb://' + app.set('m_host') + '/' + app.set('m_database'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

//configure mongoose models
models.defineModels(mongoose, function() {
  app.User = User = mongoose.model('User');
  app.Project = Project = mongoose.model('Project');
  db = mongoose.connect(app.set('connstring'));
});

// require routes
require('./routes/user');

if (!module.parent) {
  app.listen(app.set('port'));
  console.log("Chat app server listening on port %d", app.port);
}