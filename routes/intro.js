var express = require('express');
var router = express.Router();

/* GET intro page. */
router.get('/', function(req, res, next) {
  res.render('intro', { 
  	 title: 'Intro to API',
  	  name: 'James'
  	});
});

module.exports = router;