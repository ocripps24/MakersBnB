var express = require('express');
var router = express.Router();

let index = require('../controllers/index');

/* GET home page. */
router.get('/', index.index);
router.post('/', index.index);
router.post('/dashboard', index.dashboard);
router.get('/add', index.add);

module.exports = router;
