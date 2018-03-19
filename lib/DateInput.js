'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _DateOps = require('./DateOps');

var _DateOps2 = _interopRequireDefault(_DateOps);

var _validator = require('./validator.js');

var _validator2 = _interopRequireDefault(_validator);

require('../style/DateInput.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DateInput = function (_Component) {
  _inherits(DateInput, _Component);

  function DateInput(props) {
    _classCallCheck(this, DateInput);

    var _this = _possibleConstructorReturn(this, (DateInput.__proto__ || Object.getPrototypeOf(DateInput)).call(this, props));

    _this.state = _this.parseDate(props.value);
    return _this;
  }

  _createClass(DateInput, [{
    key: 'parseDate',
    value: function parseDate(value) {
      if (value !== undefined && value.match(/\d{0,4}-\d{0,2}-\d{0,2}/)) {
        var dateArray = value.split('-');
        return {
          year: dateArray[0],
          month: dateArray[1],
          day: dateArray[2],
          value: value,
          error: false
        };
      }
      return {
        year: '',
        month: '',
        day: '',
        value: '',
        error: false
      };
    }
  }, {
    key: 'correctValue',
    value: function correctValue(dateProp, value) {
      switch (dateProp) {
        case 'day':
          return value > 31 ? 31 : value;
        case 'month':
          return value > 12 ? 12 : value;
        default:
          return value;
      }
    }
  }, {
    key: 'updateDate',
    value: function updateDate(dateProp, value) {
      if (value !== '' && !value.match(/^\d+$/)) {
        return;
      }

      var correctedValue = this.correctValue(dateProp, value);
      var newState = Object.assign({}, this.state, _defineProperty({}, dateProp, correctedValue));

      var dayFocused = this.dayInput === document.activeElement;
      var monthFocused = this.monthInput === document.activeElement;

      var dayValue = dayFocused ? newState.day : _DateOps2.default.padSingleDigit(newState.day);
      var monthValue = monthFocused ? newState.month : _DateOps2.default.padSingleDigit(newState.month);
      var yearValue = newState.year;

      var dateValue = yearValue + '-' + monthValue + '-' + dayValue;

      this.setState({
        year: yearValue,
        month: monthValue,
        day: dayValue,
        value: dateValue
      });

      this.props.onChange(dateValue);
      if (dateValue.length === 10) {
        this.validate(dateValue);
      }
    }
  }, {
    key: 'handleFocus',
    value: function handleFocus(dateProp, value) {
      if (dateProp === 'year') {
        return;
      }

      var dayFocused = this.dayInput === document.activeElement;
      var monthFocused = this.monthInput === document.activeElement;

      if (dayFocused && value.length >= 2) {
        this.monthInput.focus();
      } else if (monthFocused && value.length >= 2) {
        this.yearInput.focus();
      }
    }
  }, {
    key: 'onChange',
    value: function onChange(dateProp, value) {
      this.updateDate(dateProp, value);
      this.handleFocus(dateProp, value);
    }
  }, {
    key: 'validate',
    value: function validate(dateValue) {
      var defaultRules = [{
        checker: function checker(value) {
          return (0, _moment2.default)(dateValue, 'YYYY-MM-DD', true).isValid();
        },
        errorMessage: this.props.invalidError || 'please input a valid date'
      }];
      if (this.props.minDate) {
        defaultRules.push({
          checker: function checker(value, option) {
            return (0, _moment2.default)(dateValue).isSameOrAfter(option.minDate);
          },
          errorMessage: this.props.minDateError || 'The date is too early'
        });
      }
      if (this.props.maxDate) {
        defaultRules.push({
          checker: function checker(value, option) {
            return (0, _moment2.default)(dateValue).isSameOrBefore(option.maxDate);
          },
          errorMessage: this.props.maxDateError || 'The date is too late'
        });
      }
      var errorMsg = (0, _validator2.default)(defaultRules, dateValue, { minDate: this.props.minDate, maxDate: this.props.maxDate });
      if (errorMsg) {
        this.setState({ error: true, errorMessage: errorMsg });
      } else {
        this.setState({ error: false });
      }
    }
  }, {
    key: 'onBlur',
    value: function onBlur(e) {
      var _this2 = this;

      var currentTarget = e.currentTarget;

      var dayValue = _DateOps2.default.padSingleDigit(this.state.day);
      var monthValue = _DateOps2.default.padSingleDigit(this.state.month);
      var yearValue = this.state.year;

      var currentValue = yearValue + '-' + monthValue + '-' + dayValue;

      setTimeout(function () {
        if (!currentTarget.contains(document.activeElement)) {
          _this2.validate(currentValue);
          if (_this2.state.value !== currentValue) {
            _this2.props.onChange(currentValue);
          }
          if (_this2.props.onBlur) {
            _this2.props.onBlur(currentValue);
          }
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { className: (this.state.error ? 'is-invalid' : '') + ' outline-container', onBlur: function onBlur(e) {
              return _this3.onBlur(e);
            } },
          _react2.default.createElement(
            'div',
            { id: 'day-container', className: 'date--input-container' },
            _react2.default.createElement('input', {
              id: this.props.id + '-day',
              ref: function ref(input) {
                return _this3.dayInput = input;
              },
              placeholder: 'DD',
              type: 'tel',
              maxLength: '2',
              className: 'date--input',
              value: this.state.day,
              onChange: function onChange(e) {
                return _this3.onChange('day', e.target.value);
              },
              onBlur: function onBlur(e) {
                return _this3.updateDate('day', e.target.value);
              },
              disabled: this.props.disabled
            }),
            _react2.default.createElement(
              'span',
              { className: 'date--separator' },
              '/'
            )
          ),
          _react2.default.createElement(
            'div',
            { id: 'month-container', className: 'date--input-container' },
            _react2.default.createElement('input', {
              id: this.props.id + '-month',
              ref: function ref(input) {
                return _this3.monthInput = input;
              },
              placeholder: 'MM',
              type: 'tel',
              maxLength: '2',
              className: 'date--input',
              value: this.state.month,
              onChange: function onChange(e) {
                return _this3.onChange('month', e.target.value);
              },
              onBlur: function onBlur(e) {
                return _this3.updateDate('month', e.target.value);
              },
              disabled: this.props.disabled
            }),
            _react2.default.createElement(
              'span',
              { className: 'date--separator' },
              '/'
            )
          ),
          _react2.default.createElement(
            'div',
            { id: 'year-container', className: 'date--input-container' },
            _react2.default.createElement('input', {
              id: this.props.id + '-year',
              ref: function ref(input) {
                return _this3.yearInput = input;
              },
              placeholder: 'YYYY',
              type: 'tel',
              maxLength: '4',
              className: 'date--input',
              value: this.state.year,
              onChange: function onChange(e) {
                return _this3.onChange('year', e.target.value);
              },
              onBlur: function onBlur(e) {
                return _this3.updateDate('year', e.target.value);
              },
              disabled: this.props.disabled
            })
          )
        ),
        this.state.error && _react2.default.createElement(
          'p',
          { className: 'is-invalid' },
          this.state.errorMessage
        )
      );
    }
  }]);

  return DateInput;
}(_react.Component);

DateInput.propTypes = {
  id: _propTypes2.default.string,
  value: _propTypes2.default.string,
  onChange: _propTypes2.default.func,
  onBlur: _propTypes2.default.func,
  minDate: _propTypes2.default.string,
  minDateError: _propTypes2.default.string,
  maxDate: _propTypes2.default.string,
  maxDateError: _propTypes2.default.string,
  invalidError: _propTypes2.default.string,
  disabled: _propTypes2.default.bool
};

DateInput.defaultProps = {
  disabled: false,
  minDate: null,
  maxDate: null,
  minDateError: null,
  maxDateError: null,
  invalidError: null,
  onChange: function onChange() {},
  onBlur: function onBlur() {}
};

exports.default = DateInput;