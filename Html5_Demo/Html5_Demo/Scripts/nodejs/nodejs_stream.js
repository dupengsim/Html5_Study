
/*
 * Node.js Stream(流)
 */

// 从流中读取数据
var fs = require('fs');
{
    var data = '';
    // 创建可读流
    var readerStream = fs.createReadStream('E:\\Program Files\\nodejs\\test.txt');
    // 设置编码格式
    readerStream.setEncoding('UTF8');
    // 处理事件流 --> data, end, error
    readerStream.on('data', function (chunk) {
        data += chunk;
    });
    readerStream.on('end', function () {
        console.log(data);
    });
    readerStream.on('error', function (err) {
        console.log(err.stack);
    });
    console.log('程序执行完毕！');
}

console.log("\n");

// 写入流
{
    var data = "传学网官网地址：www.cmmooc.com";
    // 创建一个可以写入的流，写入到文件 output.txt 中
    var writeStream = fs.createWriteStream('E:\\output.txt');
    // 使用 utf8 编码写入数据
    writeStream.write(data, 'UTF8');
    // 标记文件末尾
    writeStream.end();
    // 处理事件流 --> data end finish
    writeStream.on('finish', function () {
        console.log('文件写入完成。');
        console.log("\n");
    });
    writeStream.on('error', function (err) {
        console.log(err.stack);
    });
    console.log("程序执行完毕。");
}

// 管道流
{
    // 创建一个可读流
    var readStream = fs.createReadStream('E:\\Program Files\\nodejs\\test.txt');
    // 创建一个可写流
    var writeStream = fs.createWriteStream("E:\\output.doc");
    // 管道读写操作
    // 读取 input.txt 文件内容，并将内容写入到 output.txt 文件中
    readerStream.pipe(writeStream);
    console.log("\n");
}

// 链式流
{
    var zlib = require('zlib');
    // 压缩 test.txt 文件为 test.txt.gz
    fs.createReadStream('E:\\Program Files\\nodejs\\test.txt')
      .pipe(zlib.createGzip())
      .pipe(fs.createWriteStream('E:\\test.txt.gz'));

    console.log("文件压缩完成。");
}
// 这两个方法不能同时执行，需先压缩成功后 再解压缩
{
    var zlib = require('zlib');
    // 解压 test.txt.gz 文件为 test.txt
    fs.createReadStream('E:\\test.txt.gz')
    .pipe(zlib.createGunzip())
    .pipe(fs.createWriteStream('E:\\test2.txt'));

    console.log('文件解压完成。');
}