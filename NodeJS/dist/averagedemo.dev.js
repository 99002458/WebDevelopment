"use strict";

var sum = function (num1, num2, num3) {
  return num1 + num2 + num3;
}(10, 20, 30);

console.log(sum); //IIFC

(function greet(name) {
  console.log("Hello " + name);
})("Ram");

function avgOfNum(x, y) {
  return function () {
    return x + y;
  }() / 2;
}

var result = avgOfNum(10, 20);
console.log(result);