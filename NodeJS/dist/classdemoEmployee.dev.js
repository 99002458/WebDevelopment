"use strict";

var Employee = function Employee() {};

Employee.prototype.name = 'Raju';

Employee.prototype.printname = function () {
  console.log('welcome ' + this.name);
};

emp1 = new Employee('Ram');
emp1.printname();

var Product = function Product() {};

Product.prototype = {
  name: 'laptop',
  showDesc: function showDesc() {
    console.log('15 inch 12 gb ' + this.name);
  },
  printStock: function printStock(stock) {
    console.log('stock available ' + stock);
  }
};