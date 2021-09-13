var express = require('express');
var requestIp = require('request-ip');
var ip = require('ip');
var moment = require('moment');
var os = require('os');

var app = express();
var serverPort = 8080;


app.listen(serverPort, function() {
    console.log("==========================================");
    console.log("Start nodejs server on port " + serverPort);
    console.log("Platform: " + os.platform());
    console.log("Architecture: " + os.arch());
    console.log("Start date : " + moment().format("YYYY-MM-DD HH:mm:ss"))
    console.log ("URL : " + ip.address() + ":" + serverPort);   // url : 서버의ip 주소 + 서버포트 번호
    console.log("==========================================");
    
});

// __dirname 은 요청하고자 하는 파일의 경로
// (최상위 디렉토리~현재 디렉토리)를 단축시켜주는 절대경로 식별자이다.
app.get('/', function(req, res) {
    res.sendFile(__dirname + "/디렉토리명/index.html");

    // 접속한 클라이언트 정보 표시 
    console.log("---------------------------------------------------------------------------");
    console.log("클라이언트 IP : " + requestIp.getClientIp(req));
    console.log("접속한 시간   : " + moment().format("YYYY-MM-DD HH:mm:ss"));
    console.log("---------------------------------------------------------------------------");

});

app.get('/main', function(req, res) {
    res.sendFile(__dirname + "/디렉토리명/main.html");
});

// public 디렉토리를 static으로 기억한다.
// public 내부의 파일들을 localhost:8080/파일명 으로 브라우저에서 불러온다.
app.use(express.static('public'));
