'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var DateOps = {
  padSingleDigit: function padSingleDigit(dateValue) {
    return dateValue.length === 1 ? dateValue === '0' ? '01' : '0' + dateValue : dateValue === '00' ? '01' : dateValue;
  }
};

exports.default = DateOps;