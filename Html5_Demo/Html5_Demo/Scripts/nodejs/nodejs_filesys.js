
/*
 *  nodejs 文件系统
 */

var fs = require('fs');

//console.log('准备打开文件！');
//fs.open('E:\\test.txt', 'r+', function (err, fd) {
//    if (err) {
//        return console.error(err);
//    }
//    console.log("文件打开成功！");
//});

//fs.stat('E:\\test.txt', function (err, stats) {
//    console.log(stats.isFile());
//});

//// 获取文件信息
//fs.stat("E:\\test.txt", function (err, stats) {
//    if (err) {
//        return console.error(err);
//    }
//    console.log(stats);
//    console.log("读取文件信息成功！");
//    // 检查文件类型
//    console.log("是否为文件？" + stats.isFile());
//    console.log("是否为目录？" + stats.isDirectory());
//});

// 写入文件
//console.log("准备写入文件");
//fs.writeFile("E:\\input.txt", "我是通过fs.writeFile写入的文件内容", function (err) {
//    if (err) {
//        return console.error(err);
//    }
//    console.log("数据写入成功！");
//    console.log("读取写入的数据：");
//    fs.readFile("E:\\input.txt", function (err,data) {
//        if (err) {
//            return console.error(err);
//        }
//        console.log("异步读取文件数据：" + data.toString());
//    })
//});


// open 读取文件
// var buf = new Buffer(1024);
//console.log("准备打开已存在的文件！");
//fs.open("E:\\input.txt", "r+", function (err, fd) {
//    if (err) {
//        return console.error(err);
//    }
//    console.log("文件打开成功!");
//    console.log("准备读取文件：");
//    fs.read(fd, buf, 0, buf.length, 0, function (err, bytes) {
//        if (err) {
//            return console.error(err);
//        }
//        console.log(bytes + "  字节被读取");
//        // 仅输出读取的字节
//        if (bytes.length > 0) {
//            console.log(buf.slice(0, bytes).toString());
//        }

//        // 关闭文件
//        fs.close(fd, function (err) {
//            if (err) {
//                console.log(err);
//            }
//            console.log("文件关闭成功！");
//        });
//    });
//});


//console.log("准备打开文件！");
//fs.open('E:\\input.txt', 'r+', function (err, fd) {
//    if (err) {
//        return console.error(err);
//    }
//    console.log("文件打开成功！");
//    console.log("截取10字节后的文件内容。");

//    // 截取文件
//    fs.ftruncate(fd, 10, function (err) {
//        if (err) {
//            console.log(err);
//        }
//        console.log("文件截取成功。");
//        console.log("读取相同的文件");
//        fs.read(fd, buf, 0, buf.length, 0, function (err, bytes) {
//            if (err) {
//                console.log(err);
//            }

//            // 仅输出读取的字节
//            if (bytes > 0) {
//                console.log(buf.slice(0, bytes).toString());
//            }

//            // 关闭文件
//            fs.close(fd, function (err) {
//                if (err) {
//                    console.log(err);
//                }
//                console.log("文件关闭成功！");
//            });
//        });
//    });
//});

// 删除文件
//console.log("准备删除文件！");
//fs.unlink("E:\\test.txt", function (err) {
//    if (err) {
//        return console.error(err);
//    }
//    console.log("文件删除成功！");
//});

// 创建目录
console.log("创建目录：/tmp/test/");
//  只能一层一层逐级创建
fs.mkdir("E:\\newdir\\test\\", function (err) {
    if (err) {
        return console.error(err);
    }
    console.log("目录创建成功！");
});