
/*
 * nodejs常用的工具
 */

var util = require('util');
function Base() {
    this.name = "base";
    this.birth = 1989;
    this.sayHello = function () {
        console.log("Hello " + this.name);
    };
}

Base.prototype.showName = function () {
    console.log(this.name);
};

function Sub() {
    this.name = "sub";
}

util.inherits(Sub, Base);
var objBase = new Base();
objBase.showName();
objBase.sayHello();
console.log(objBase);

var objSub = new Sub();
objSub.showName();
//objSub.sayHello();
console.log(objSub);  // 子类只能继承原型中定义的属性和方法，内部构造函数中定义的属性和函数不会被继承


function Person() {
    this.name = "dupeng";
    this.toString = function () {
        return this.name;
    };
}
var obj = new Person();
console.log(util.inspect(obj));
console.log(util.inspect(obj, true));