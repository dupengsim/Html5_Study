
/*
 *  nodejs 全局对象与全局变量
 */

// 返回当前模块文件的绝对路径
console.log(__filename);

// 返回当前执行脚本 所在的目录
console.log(__dirname);

// setTimeout定时器
{
    function printHello() {
        console.log("Hello  World！");
    }
    setTimeout(printHello, 2000);
}

// clearTimeout
{
    function printHello2() {
        console.log("Hello World !!!!");
    }
    var t = setTimeout(printHello, 2000);
    clearTimeout(t);
}

// process
process.on('exit', function (code) {
    // 以下代码永远不会执行
    setTimeout(function () {
        console.log("此处代码不会执行");
    }, 0);
    console.log("退出码是：", code);
});
console.log("程序执行结束");

// 输出到终端
process.stdout.write("Hello World!" + "\n");
// 通过参数读取
process.argv.forEach(function (val, index, array) {
    console.log(index + "：" + val);
});
// 获取执行路径
console.log(process.execPath);
// 输出平台信息
console.log(process.platform);

// 输出当前目录
console.log("当前目录：" + process.cwd());
// 输出当前版本
console.log("当前版本：" + process.version);
// 输出内存使用情况
console.log(process.memoryUsage());