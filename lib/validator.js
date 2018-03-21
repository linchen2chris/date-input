'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getDefaultRules = function getDefaultRules(dateValue, _ref) {
  var minDate = _ref.minDate,
      maxDate = _ref.maxDate,
      invalidError = _ref.invalidError,
      minDateError = _ref.minDateError,
      maxDateError = _ref.maxDateError;

  var defaultRules = [{
    checker: function checker(value) {
      return (0, _moment2.default)(dateValue, 'YYYY-MM-DD', true).isValid();
    },
    errorMessage: invalidError || 'please input a valid date'
  }];
  if (minDate) {
    defaultRules.push({
      checker: function checker(value) {
        return (0, _moment2.default)(dateValue).isSameOrAfter(minDate);
      },
      errorMessage: minDateError || 'The date is too early'
    });
  }
  if (maxDate) {
    defaultRules.push({
      checker: function checker(value) {
        return (0, _moment2.default)(dateValue).isSameOrBefore(maxDate);
      },
      errorMessage: maxDateError || 'The date is too late'
    });
  }
  return defaultRules;
};

var validator = function validator(value, options, userRules) {
  var rules = userRules || getDefaultRules(value, options);
  for (var i = 0; i < rules.length; i++) {
    if (!rules[i].checker(value)) {
      return rules[i].errorMessage;
    }
  }
  return null;
};

exports.default = validator;