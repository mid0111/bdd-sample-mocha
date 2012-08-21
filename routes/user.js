// login route
app.post('/', function(req, res) {
  User.findOne({ name: req.body.user.name }, function(err, user) {
    if(user) {
      req.session.user_id = user.id;
    }
  });
});

// user regist
app.post('/register', function(req, res) {
  console.log(req.body.name);
  User.findOne({ name: req.body.name }, function(err, user) {
    if(user) {
      // conflict
      res.send({ msg: 'User name [' + req.body.name + '] already exists.' }, 409);
    } else {
      var newUser = new User({ name : req.body.name, project : req.body.project });
      newUser.save(function(err) {
        if(err) res.send({ msg: err.erros }, 400);
        res.send(newUser.toObject(), 201);
      });
    }
  });
});
