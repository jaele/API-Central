var express = require('express');
var router = express.Router();

/* GET getkey page. */
router.get('/', function(req, res, next) {
  res.render('getkey', { 
  	 title: 'Get API Key',
  	  name: 'James'
  	});
});

module.exports = router;