var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'End of Life Alliance' });
});

router.get('/freight', function(req, res, next) {
  res.render('freight', {title: 'EOL Freight Service' });
});

router.get('/holding', function(req, res, next) {
  res.render('holding', {title: 'End of Life Alliance'});
})

module.exports = router;
