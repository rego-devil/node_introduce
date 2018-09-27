import {getMessage} from './greeting.js'; 
import http from 'http';

http.createServer( (request,response) => {
    response.end(`Hello NodeJS!`);
}).listen(3001, "127.0.0.1", () => {
    console.log("Сервер начал прослушивание запросов на порту 3001");
});

global.name = 'Egor';
console.log(date);
// console.log(getMessage());

console.log(process.argv)