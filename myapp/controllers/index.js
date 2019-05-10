const models = require('../models')

var userid, username,user
var properties

exports.index = function(req, res, next) {
  res.render('index');
}

exports.add = function(req, res, next) {
  res.render('add');
}

exports.submit_signup = function(req, res, next) {
  return models.Users.create({
    username: req.body.signUpName,
    email: req.body.signUpEmail,
    password: req.body.signUpPassword
  }).then(user => {
    res.redirect("/")
  })
};

exports.check_user = function(req, res, next) {
  return models.Users.findOne({
		where : {
      email: req.body.logInEmail,
      password: req.body.logInPassword
		}
	}).then(user => {
    userid = user.id;
    username = user.username;
    res.redirect('/dashboard');
  })
}

// exports.show_user = function(req, res, next) {
//
//   return models.Users.findOne({
// 		where : {
//       id: userid,
// 		}
// 	}).then(user => {
//     res.render('dashboard', { name: user.username });
//   })
// }


exports.add_property = function(req, res, next) {
  return models.Properties.create({
    name: req.body.propertyName,
    description: req.body.propertyDescription,
    price: req.body.propertyPrice,
    user_id: userid
  }).then(property => {
    res.redirect("/dashboard")
  })
};

exports.show_properties = function(req, res, next) {
	return models.Properties.findAll().then(properties => {
 	  res.render('dashboard', {properties: properties, name: username, userid: userid  })
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
