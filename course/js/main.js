"use strict";

var number = 123456.34;
var en = new Intl.NumberFormat("en-US").format(number);
var de = new Intl.NumberFormat("de-DE").format(number);

console.log(en);
console.log(de);
