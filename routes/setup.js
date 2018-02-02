var express = require('express');
var router = express.Router();

/* GET setup page. */
router.get('/', function(req, res, next) {
  res.render('setup', { 
  	 title: 'Setting up Javascript',
  	  name: 'James'
  	});
});

module.exports = router;