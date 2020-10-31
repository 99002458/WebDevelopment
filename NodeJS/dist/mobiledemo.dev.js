"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

mobileList = [{
  brand: 'realme',
  price: 20000,
  features: {
    RAM: '4 GB',
    Camera: '20MP',
    ScreenSize: '5.99 inch'
  },
  accessories: ['charger', 'earphones', 'cable']
}, {
  brand: 'realme1',
  price: 200001,
  features: {
    RAM: '4 GB1',
    Camera: '20MP1',
    ScreenSize: '5.99 inch'
  },
  accessories: ['charger', 'earphones', 'cable']
}, {
  brand: 'realme2',
  price: 200002,
  features: {
    RAM: '4 GB2',
    Camera: '20MP2',
    ScreenSize: '5.99 inch'
  },
  accessories: ['charger', 'earphones', 'cable']
}];
mobileList.forEach(function (mobile) {
  for (var prop in mobile) {
    var mob = mobile[prop];

    if (mob instanceof Array) {
      for (var i in mob) {
        console.log('hobby: ' + mob[i]);
      }
    } else if (_typeof(mob) == 'object') {
      for (var key in mob) {
        console.log(key + ':' + mob[key]);
      }
    } else if (typeof mob == 'function') {
      mob();
    } else console.log(mob);
  }

  console.log("-------------------------------");
});