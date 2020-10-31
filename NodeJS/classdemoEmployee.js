var Employee = function() {}
Employee.prototype.name = 'Raju';
Employee.prototype.printname = function() {
    console.log('welcome ' + this.name);
};
emp1 = new Employee('Ram');
emp1.printname();
var Product = function() {}
Product.prototype = {
    name: 'laptop',
    showDesc: function() {
        console.log('15 inch 12 gb ' + this.name);
    },
    printStock: function(stock) {
        console.log('stock available ' + stock);
    }
}