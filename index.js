var express = require('express');
var app = express();
var path = require('path');
app.use('/bootstrap', express.static(path.join(__dirname, 'node_modules/bootstrap/dist')));
var main = require('./main');

app.get('/', function(req, res) {
    res.send(main());
});

app.listen(3000, function() {
    console.log('서버가 3000번 포트에서 실행 중입니다.');
});