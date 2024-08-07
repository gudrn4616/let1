var express = require('express');
var fs = require('fs');
var path = require('path');
var app = express();
app.use('/bootstrap', express.static(path.join(__dirname, 'node_modules/bootstrap/dist')));

app.get('/', (req, res) =>{
    var indexhtml = path.join(__dirname, 'html/index.html');
    fs.readFile(indexhtml, 'utf8', function(err, data) {
        if (err) {
            res.status(500).send('파일을 읽는 중 오류가 발생했습니다.');
        } else {
            res.send(data);
        }
    });
});

app.get('/Kim', (req, res) =>{
    var introductionPath = path.join(__dirname, 'html/자기소개.html');
    fs.readFile(introductionPath, 'utf8', function(err, data) {
        if (err) {
            res.status(500).send('파일을 읽는 중 오류가 발생했습니다.');
        } else {
            res.send(data);
        }
    });
});

app.get('/Heo', (req, res) =>{
    var introductionPath = path.join(__dirname, 'html/Heo.html');
    fs.readFile(introductionPath, 'utf8', function(err, data) {
        if (err) {
            res.status(500).send('파일을 읽는 중 오류가 발생했습니다.');
        } else {
            res.send(data);
        }
    });
});

app.get('/Mun', (req, res) =>{
    var introductionPath = path.join(__dirname, 'html/Mun.html');
    fs.readFile(introductionPath, 'utf8', function(err, data) {
        if (err) {
            res.status(500).send('파일을 읽는 중 오류가 발생했습니다.');
        } else {
            res.send(data);
        }
    });
});

app.get('/Lyu', (req, res) =>{
    var introductionPath = path.join(__dirname, 'html/Lyu.html');
    fs.readFile(introductionPath, 'utf8', function(err, data) {
        if (err) {
            res.status(500).send('파일을 읽는 중 오류가 발생했습니다.');
        } else {
            res.send(data);
        }
    });
}); 

app.get('/Lee', (req, res) =>{
    var introductionPath = path.join(__dirname, 'html/Lee.html');
    fs.readFile(introductionPath, 'utf8', function(err, data) {
        if (err) {
            res.status(500).send('파일을 읽는 중 오류가 발생했습니다.');
        } else {
            res.send(data);
        }
    });
}); 

app.listen(3000, ( )=> {
    console.log('서버가 3000번 포트에서 실행 중입니다.');
});