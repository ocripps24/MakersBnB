var express = require('express');
var router = express.Router();

let index = require('../controllers/index');

/* GET home page. */
router.get('/', index.index);
router.post('/', index.submit_signup);
router.post('/users', index.check_user);
router.get('/dashboard',index.show_properties );
// router.post('/dashboard', index.show_properties);

router.get('/add', index.add);
router.post('/add', index.add_property);

module.exports = router;
