var express = require('express');
var router = express.Router();
var path = require('path');
router.use('/bootstrap', express.static(path.join(__dirname, 'node_modules/bootstrap/dist')));
var main = require('./main');

module.exports = router;
var app = express();


app.get('/', function(req, res) {
    res.send(main());
});

app.listen(3000);