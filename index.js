var express = require('express');
var fs = require('fs');
var path = require('path');
var mysql = require('mysql');
var bodyParser = require('body-parser');
var app = express();

// body-parser 미들웨어를 사용하여 요청 본문을 JSON 및 URL 인코딩된 형식으로 파싱합니다.
// 이는 POST 요청에서 데이터를 쉽게 추출할 수 있도록 도와줍니다.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Bootstrap 정적 파일을 제공하기 위해 경로를 설정합니다.
app.use('/bootstrap', express.static(path.join(__dirname, 'node_modules/bootstrap/dist')));

// MySQL 데이터베이스 연결 설정
var db = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: 'password',
    database: 'guestbook'
});

// 데이터베이스 연결
db.connect((err) => {
    if (err) {
        console.error('데이터베이스 연결 실패: ' + err.stack);
        return;
    }
    console.log('데이터베이스에 연결되었습니다.');
});

// 루트 경로에 대한 GET 요청 처리
app.get('/', (req, res)=> {
    var indexhtml = path.join(__dirname, 'html/index.html');
    fs.readFile(indexhtml, 'utf8', (err, data) => {
        if (err) {
            res.status(500).send('파일을 읽는 중 오류가 발생했습니다.');
        } else {
            res.send(data);
        }
    });
});

// 김형구 자기소개 페이지에 대한 GET 요청 처리
app.get('/kimhyunggu', (req, res) => {
    var introductionPath = path.join(__dirname, 'html/자기소개.html');
    fs.readFile(introductionPath, 'utf8', (err, data) => {
        if (err) {
            res.status(500).send('파일을 읽는 중 오류가 발생했습니다.');
        } else {
            res.send(data);
        }
    });
});

// 허석재 자기소개 페이지에 대한 GET 요청 처리
app.get('/Heo', (req, res) => {
    var introductionPath = path.join(__dirname, 'html/Heo.html');
    fs.readFile(introductionPath, 'utf8', (err, data) => {
        if (err) {
            res.status(500).send('파일을 읽는 중 오류가 발생했습니다.');
        } else {
            res.send(data);
        }
    });
});

// 방명록 페이지에 대한 GET 요청 처리
app.get('/guestbook', (req, res) => {
    var guestbookPath = path.join(__dirname, 'html/guestbook.html');
    fs.readFile(guestbookPath, 'utf8', (err, data) => {
        if (err) {
            res.status(500).send('파일을 읽는 중 오류가 발생했습니다.');
        } else {
            res.send(data);
        }
    });
});

// 방명록 항목 추가를 위한 POST 요청 처리
app.post('/api/guestbook', (req, res) => {
    var name = req.body.name;
    var message = req.body.message;
    var query = 'INSERT INTO entries (name, message) VALUES (?, ?)';
    db.query(query, [name, message], (err, result) => {
        if (err) {
            res.status(500).send('데이터베이스에 항목을 추가하는 중 오류가 발생했습니다.');
        } else {
            res.status(200).send('항목이 성공적으로 추가되었습니다.');
        }
    });
});

// 방명록 항목 조회를 위한 GET 요청 처리
app.get('/api/guestbook',   (req, res) => {
    var query = 'SELECT * FROM entries';
    db.query(query, (err, results) => {
        if (err) {
            res.status(500).send('데이터베이스에서 항목을 가져오는 중 오류가 발생했습니다.');
        } else {
            res.json(results);
        }
    });
});

// 방명록 항목 삭제를 위한 DELETE 요청 처리
app.delete('/api/guestbook/:id', (req, res) => {
    // 요청에서 id 파라미터를 가져옵니다.
    var id = req.params.id;
    // 항목을 삭제하기 위한 SQL 쿼리를 정의합니다.
    var query = 'DELETE FROM entries WHERE id = ?';
    // 데이터베이스에 쿼리를 실행합니다.
    db.query(query, [id], (err, result) => {
        if (err) {
            // 오류가 발생하면 500 상태 코드와 함께 오류 메시지를 보냅니다.
            res.status(500).send('데이터베이스에서 항목을 삭제하는 중 오류가 발생했습니다.');
        } else {
            // 성공적으로 삭제되면 200 상태 코드와 함께 성공 메시지를 보냅니다.
            res.status(200).send('항목이 성공적으로 삭제되었습니다.');
        }
    });
});

// 방명록 항목 수정을 위한 PUT 요청 처리
app.put('/api/guestbook/:id', (req, res) => {
    // 요청에서 id 파라미터를 가져옵니다.
    var id = req.params.id;
    // 요청 본문에서 name과 message를 가져옵니다.
    var name = req.body.name;
    var message = req.body.message;
    // 항목을 수정하기 위한 SQL 쿼리를 정의합니다.
    var query = 'UPDATE entries SET name = ?, message = ? WHERE id = ?';
    // 데이터베이스에 쿼리를 실행합니다.
    db.query(query, [name, message, id], (err, result) => {
        if (err) {
            // 오류가 발생하면 500 상태 코드와 함께 오류 메시지를 보냅니다.
            res.status(500).send('데이터베이스에서 항목을 수정하는 중 오류가 발생했습니다.');
        } else {
            // 성공적으로 수정되면 200 상태 코드와 함께 성공 메시지를 보냅니다.
            res.status(200).send('항목이 성공적으로 수정되었습니다.');
        }
    });
});

// 서버를 3000번 포트에서 실행
app.listen(5000, ()=> {
    console.log('서버가 5000번 포트에서 실행 중입니다.');
});