var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond from harsh');
});

router.get('/punjani', function(req, res, next) {
    res.send('respond from harsh punjani');
  });

module.exports = router;
