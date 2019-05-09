
exports.index = function(req, res, next) {
  res.render('index');
}

exports.dashboard = function(req, res, next) {
  res.render('dashboard', {name: req.body.email});
}

exports.add = function(req, res, next) {
  res.render('add');
}
