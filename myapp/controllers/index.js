const models = require('../models')

var userid

exports.index = function(req, res, next) {
  res.render('index');
}

exports.dashboard = function(req, res, next) {
  res.render('dashboard', {name: req.body.email});
}

exports.add = function(req, res, next) {
  res.render('add');
}

exports.submit_signup = function(req, res, next) {
  return models.Users.create({
    username: req.body.signupusername,
    email: req.body.signupemail,
    password: req.body.signuppassword
  }).then(user => {
    res.redirect("/")
  })
};

exports.check_user = function(req, res, next) {
  return models.Users.findOne({
		where : {
      email: req.body.loginemail,
      password: req.body.loginpassord
		}
	}).then(user => {
    userid = user.id;
    console.log(userid)
    res.redirect('/user/'+ userid);
  })
}

exports.show_user = function(req, res, next) {

  return models.Users.findOne({
		where : {
      id: userid,
		}
	}).then(user => {
    res.render('user', { username: user.username });
  })
}


// exports.update_table = function(req, res, next) {
//
//   return models.Table???.update({
//     ???: req.body.???
//
// 		where : {
//       ???: req.params.???,
// 		}
// 	}).then(user => {
//     res.???;
//   })
// }
//
// exports.delete_table = function(req, res, next) {
// 	return models.Table???.destroy({
// 		where: {
// 			???: req.params.???
// 		}
// 	}).then(result => {
// 		res.????
// 	})
// }
