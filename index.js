const express = require('express');
const fs = require('fs');
const path = require('path');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const app = express();

// body-parser 미들웨어를 사용하여 요청 본문을 JSON 및 URL 인코딩된 형식으로 파싱합니다.
// 이는 POST 요청에서 데이터를 쉽게 추출할 수 있도록 도와줍니다.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Bootstrap 정적 파일을 제공하기 위해 경로를 설정합니다.
app.use('/bootstrap', express.static(path.join(__dirname, 'node_modules/bootstrap/dist')));


// 루트 경로에 대한 GET 요청 처리
app.get('/', (req, res) => {
    const indexhtml = path.join(__dirname, 'html/index.html');
    fs.readFile(indexhtml, 'utf8', (err, data) => {
        if (err) {
            res.status(500).send('파일을 읽는 중 오류가 발생했습니다.');
        } else {
            res.send(data);
        }
    });
});


// 방명록 페이지에 대한 GET 요청 처리
app.get('/guestbook', (req, res) => {
    const guestbookPath = path.join(__dirname, 'html/guestbookTest.html');
    fs.readFile(guestbookPath, 'utf8', (err, data) => {
        if (err) {
            res.status(500).send('파일을 읽는 중 오류가 발생했습니다.');
        } else {
            res.send(data);
        }
    });
});

// 김형구 자기소개 페이지에 대한 GET 요청 처리
app.get('/Kim', (req, res) => {
    const introductionPath = path.join(__dirname, 'html/자기소개.html');
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
    const introductionPath = path.join(__dirname, 'html/Heo.html');
    fs.readFile(introductionPath, 'utf8', (err, data) => {
        if (err) {
            res.status(500).send('파일을 읽는 중 오류가 발생했습니다.');
        } else {
            res.send(data);
        }
    });
});

//문진수 자기소개 페이지에 대한 GET 요청 처리
app.get('/Mun', (req, res) => {
    const introductionPath = path.join(__dirname, 'html/Mun.html');
    fs.readFile(introductionPath, 'utf8', (err, data) => {
        if (err) {
            res.status(500).send('파일을 읽는 중 오류가 발생했습니다.');
        } else {
            res.send(data);
        }
    });
});
// 류재준 자기소개 페이지에 대한 GET 요청 처리
app.get('/Ryu', (req, res) => {
    const introductionPath = path.join(__dirname, 'html/Ryu.html');
    fs.readFile(introductionPath, 'utf8', (err, data) => {
        if (err) {
            res.status(500).send('파일을 읽는 중 오류가 발생했습니다.');
        } else {
            res.send(data);
        }
    });
});
//이승환 자기소개 페이지에 대한 GET 요청 처리
app.get('/Lee', (req, res) => {
    const introductionPath = path.join(__dirname, 'html/Lee.html');
    fs.readFile(introductionPath, 'utf8', (err, data) => {
        if (err) {
            res.status(500).send('파일을 읽는 중 오류가 발생했습니다.');
        } else {
            res.send(data);
        }
    });
});

app.listen(3000, () => {
    console.log('서버가 3000번 포트에서 실행 중입니다.');
});