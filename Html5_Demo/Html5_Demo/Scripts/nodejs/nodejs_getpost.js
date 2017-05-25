
/*
 *  nodejs 的GET和POST请求
 */

// GET请求
//var http = require('http');
//var url = require('url');
//var util = require('util');

//http.createServer(function (request, response) {
//    response.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
//    //response.end(util.inspect(url.parse(request.url, true)));

//    var parms = url.parse(request.url, true).query;
//    response.write("网站名：" + parms.name);
//    response.write("\n");
//    response.write("网站 URL：" + parms.url);
//    response.end();
//}).listen(3000);


// POST请求
var http = require('http');
var querystring = require('querystring');

var postHTML =
  '<html><head><meta charset="utf-8"><title>传学网 Node.js 学习</title></head>' +
  '<body>' +
  '<form method="post">' +
  '网站名： <input name="name"><br>' +
  '网站 URL： <input name="url"><br>' +
  '<input type="submit">' +
  '</form>' +
  '</body></html>';

http.createServer(function (request, response) {
    var body = "";
    request.on('data', function (chunk) {
        body += chunk;
    });
    request.on('end', function () {
        // 解析参数
        body = querystring.parse(body);
        // 设置响应头部信息及编码
        response.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        if (body.name && body.url) { // 输出提交的数据
            response.write("网站名：" + body.name);
            response.write("<br />");
            response.write("网站 URL：" + body.url);
        } else {
            response.write(postHTML);
        }
        response.end();
    });
}).listen(3000);