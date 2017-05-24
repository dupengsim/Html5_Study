
/*
 *   nodejs 模块系统
 */


function Hello() {
    var name;
    this.setName = function (thisName) {
        name = thisName;
    }
    this.sayHello = function () {
        console.log('hello' + name);
    }
}
module.exports = Hello;