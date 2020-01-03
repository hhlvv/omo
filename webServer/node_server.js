const http = require('http');

const server = http.createServer((req, res) => {
	var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
	//x-forwarded-for : 실제 IP를 헤더에 포함
	
	console.log("ip : ",ip);
	console.log("url : ", req.url);
	console.log("headers : ", req.headers);

	res.statusCode = 200;
	res.setHeader('Content-Type', 'text/plain');
	res.end('Hello World!!\n' + JSON.stringify(req.headers, null, 4));
	//req.headers : 클라이언트에서 서버로 보낸 헤더 값들을 확인

});

server.listen(80, (err) => {
	if(err){
		console.log(err);
	}
	console.log('server running');
});