
/*
 *  引用外部js模块
 */

var Hello = require('./nodejs_module');
var hello = new Hello();
hello.setName("杜鹏");
hello.sayHello();