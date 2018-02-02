var express = require('express');
var router = express.Router();

/* GET github page. */
router.get('/', function(req, res, next) {
  res.render('github', { 
     title: 'Github Search',
      name: 'James'
    });
});

module.exports = router;