"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var validator = function validator(rules, value, option) {
  for (var i = 0; i < rules.length; i++) {
    if (!rules[i].checker(value, option)) {
      return rules[i].errorMessage;
    }
  }
  return null;
};

exports.default = validator;