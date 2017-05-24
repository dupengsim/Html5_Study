
/*
 *  引入nodejs_router.js和nodejs_router_route.js两个外部模块，并执行
 */

var server = require("./nodejs_router");
var router = require("./nodejs_router_route");

server.start(router.route);