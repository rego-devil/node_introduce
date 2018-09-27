'use strict';

var _greeting = require('./greeting.js');

var _http = require('http');

var _http2 = _interopRequireDefault(_http);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_http2.default.createServer(function (request, response) {
    response.end('Hello NodeJS!');
}).listen(3001, "127.0.0.1", function () {
    console.log("Сервер начал прослушивание запросов на порту 3001");
});

global.name = 'Egor';
console.log(date);
// console.log(getMessage());

console.log(process.argv);