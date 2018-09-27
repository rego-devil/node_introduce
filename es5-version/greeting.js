"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var currentDate = new Date();

global.date = currentDate;

var getMessage = exports.getMessage = function getMessage() {
  var hour = currentDate.getHours();
  if (hour > 13) return "Добрый вечер, " + global.name;else return "Добрый день, " + global.name;
};