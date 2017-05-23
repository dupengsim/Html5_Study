

// 这种方式读取 阻塞代码
var fs = require("fs");
var data = fs.readFileSync('test.txt');
console.log(data.toString());

// 下面这种方式非阻塞代码
fs.readFile('test.txt', function (err, data) {
    if (err) return console.log(err);
    console.log(data.toString());
});

