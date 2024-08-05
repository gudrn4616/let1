var express = require('express');
var router = express.Router();
var path = require('path');
router.use('/bootstrap', express.static(path.join(__dirname, 'node_modules/bootstrap/dist')));
var main = require('./main');

module.exports = router;
var app = express();


app.get('/', function(req, res) {
    const data = `<div class="card" style="width: 18rem;">
        <img src="..." class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
    </div>`
    res.send(main.header() + data + main.end());
});

app.listen(3000);