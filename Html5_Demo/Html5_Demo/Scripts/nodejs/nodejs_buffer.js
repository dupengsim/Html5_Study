
/*
 * Node.js Buffer(缓冲区)
 *  详细的介绍性内容：http://www.runoob.com/nodejs/nodejs-buffer.html
 */

// 1、js文件名字中不能出现空格，否则在cmd中执行js文件时会不识别而报错
var buf = new Buffer(256);
var len = buf.write("www.cmmooc.com");

console.log("写入字节数：" + len);

console.log("\n");
// 2、解码缓冲区数据并使用指定的编码返回字符串。
console.log("\n");

var buff = new Buffer(26);
for (var i = 0; i < 26; i++) {
    buff[i] = i + 97;
}

console.log(buff.toString('ascii')); // 以ascii编码格式输出全部内容
console.log(buff.toString('ascii', 0, 5));//以ascii编码输出从0开始长度为5的 字符内容
console.log(buff.toString('utf8', 0, 6));
console.log(buff.toString(undefined, 0, 5));


// 3、将 Buffer 转换为 JSON 对象

var buff2 = new Buffer('www.cmmooc.com');
var json = buff2.toJSON(buff2);
console.log(json);

// 4、缓冲区合并  返回一个多个成员合并的新 Buffer 对象。
var buffer1 = new Buffer('传学网');
var buffer2 = new Buffer("www.cmmooc.com");
var buffer3 = Buffer.concat([buffer1, buffer2]);   // concat单词很容易写错！！！
console.log("buffer3 内容：" + buffer3.toString());

// 5、缓冲区比较
var buffer4 = new Buffer('ABC');
var buffer5 = new Buffer('ABCD');
var result = buffer4.compare(buffer5);

if (result < 0) {
    console.log(buffer4 + " 在 " + buffer5 + "之前");
} else if (result == 0) {
    console.log(buffer4 + " 与 " + buffer5 + "相同");
} else {
    console.log(buffer4 + " 在 " + buffer5 + "之后");
}

// 6、拷贝缓冲区
var buffer6 = new Buffer('ABC');
// 拷贝一个缓冲区
var buffer7 = new Buffer(3);
buffer6.copy(buffer7);
console.log("buffer7 content: " + buffer7.toString());

// 7、缓冲区裁剪
var buffer8 = new Buffer('runoob');
// 剪切缓冲区
var buffer9 = buffer8.slice(0, 2);
console.log("buffer9 content: " + buffer9.toString());