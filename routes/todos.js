var express = require('express');
var router = express.Router();
var todosCtrl = require('../controllers/todos');


router.get('/index', todosCtrl.index);
router.get('/new', todosCtrl.new);
router.post('/', todosCtrl.create);
router.delete('/:idx', todosCtrl.delete);
/* GET users listing. */


// router.get('/index', function(req, res, next) {
//   res.send('respond with a resource');
// });

module.exports = router;
