
// 打开E:\Program Files\nodejs中的窗口，注册nodejs服务
var http = require('http');
http.createServer(function (request, response) {

    response.writeHead(200, { 'Content-Type': 'text/plain;charset=utf-8' });
    var i = 0;
    for (var i = 0; i < 10; i++) {
        console.log(i);
    }
    response.end('Hello World\n  你好，世界！');
}).listen(8888);

console.log('Server running at http://127.0.0.1:8888/');

//// 读取本地TXT文件，注意txt文件要放到上面的路径下
//var fs = require("fs");
//var data = fs.readFileSync('test.txt');
//console.log(data.toString());
//// 直接读取，中文的情况下会出现乱码，手动编码也不行
//var data = fs.readFileSync('test.txt');
//data.setEncoding('gbk');
//console.log(data.toString());
//console.log('执行完毕!');

//// 网友的一种解决方法，试过不行
//var fs = require('fs');
//var rs = fs.createReadStream('test.txt');
//var chunks = [];
//var size = 0;
//rs.on('data', function (chunk) {
//    chunks.push(chunk);
//    size += chunk.length;
//});
//rs.on('end', function () {
//    var buf = Buffer.concat(chunks, size);
//    var str = iconv.decode(buf, 'utf8');
//    console.log(str);
//});

//// 针对上述问题，网上找到一种解决方法
//// step1：首先安装中文转换模块 cmd   npm install -g iconv-lite
//// step2：加载以下js文件

//var iconv = require('iconv-lite');
//var fs = require('fs');
//var fileStr = fs.readFileSync('test.txt', { encoding: 'binary' });
//var buf = new Buffer(fileStr, 'binary');
//var str = iconv.decode(buf, 'GBK');
//console.log(str);

// 貌似走弯路了，在保存记事本时设置编码格式为utf-8就不会乱码了
// 下面这样读取就可以

// 这种方式读取 阻塞代码
//var fs = require("fs");
//var data = fs.readFileSync('test.txt');
//console.log(data.toString());

// 下面这种方式非阻塞代码
