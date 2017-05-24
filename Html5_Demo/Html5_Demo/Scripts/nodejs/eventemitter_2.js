
/*
 *   eventemiter：核心就是事件触发与事件监听器功能的封装
 */

// 引入events模块并创建 EventEmitter对象
var events = require('events');
var eventEmitter = new events.EventEmitter();

eventEmitter.on('some_event', function () {
    console.log('some_event 事件触发');
});

setTimeout(function () {
    eventEmitter.emit('some_event');
    console.log('等待了2秒后执行...');
}, 2000);

// 带参数的执行
console.log("\n 带参数的执行。。。");
eventEmitter.on('someEvent', function (arg1, arg2) {
    console.log('listenner1', arg1, arg2);
});
eventEmitter.on('someEvent', function (arg1, arg2) {
    console.log('listenner2', arg1, arg2);
});
eventEmitter.emit('someEvent', '参数arg1', '参数arg2');

//实例
console.log("\n 实际案例。。。");
// 监听器1
var listener1 = function listener1() {
    console.log('监听器 listener1 执行。');
}
// 监听器2
var listener2 = function listener2() {
    console.log('监听器 listener2 执行。');
}

// 绑定 connection 事件，处理函数为 listener1 
eventEmitter.addListener('connection', listener1);
// 绑定 connection 事件，处理函数为 listener2
eventEmitter.on('connection', listener2);

var eventListeners = require('events').EventEmitter.listenerCount(eventEmitter, 'connection');
console.log(eventListeners + "个监听器监听连接事件。");

// 处理 connection 事件
eventEmitter.emit('connection');

// 移除监听器绑定的 listener1 函数
eventEmitter.removeListener('connection', listener1);
// 触发连接事件
eventEmitter.emit('connection');

eventListeners = require('events').EventEmitter.listenerCount(eventEmitter, 'connection');
console.log(eventListeners + "个监听器监听连接事件。");
console.log("程序执行完毕。");