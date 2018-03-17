import React, {Component} from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import DateOps from './DateOps';
import '../style/DateInput.css';

class DateInput extends Component {
  constructor(props) {
    super(props);
    this.state = this.parseDate(props.value);
  }

  parseDate(value) {
    if (value !== undefined && value.match(/\d{0,4}-\d{0,2}-\d{0,2}/)) {
      const dateArray = value.split('-');
      return {
        year: dateArray[0],
        month: dateArray[1],
        day: dateArray[2],
        value: value,
        error: false,
      };
    }
    return {
      year: '',
      month: '',
      day: '',
      value: '',
      error: false,
    };
  }

  correctValue(dateProp, value) {
    switch(dateProp) {
    case 'day':
      return value > 31 ? 31 : value;
    case 'month':
      return value > 12 ? 12 : value;
    default:
      return value;
    }
  };

  updateDate (dateProp, value) {
    if (value !== '' && !value.match(/^\d+$/)) {
      return;
    }

    const correctedValue = this.correctValue(dateProp, value);
    const newState = Object.assign({}, this.state, {[dateProp]: correctedValue});

    const dayFocused = this.dayInput === document.activeElement;
    const monthFocused = this.monthInput === document.activeElement;

    const dayValue = dayFocused ? newState.day : DateOps.padSingleDigit(newState.day);
    const monthValue = monthFocused ? newState.month : DateOps.padSingleDigit(newState.month);
    const yearValue = newState.year;

    const dateValue = `${yearValue}-${monthValue}-${dayValue}`;

    this.setState({
      year: yearValue,
      month: monthValue,
      day: dayValue,
      value: dateValue,
    });

    this.props.onChange(dateValue)
    if(dateValue.length === 10) {
      this.validate(dateValue);
    }
  };

 handleFocus(dateProp, value) {
    if (dateProp === 'year') {
      return;
    }

    const dayFocused = this.dayInput === document.activeElement;
    const monthFocused = this.monthInput === document.activeElement;

    if (dayFocused && value.length >=2) {
      this.monthInput.focus();
    } else if (monthFocused && value.length >= 2) {
      this.yearInput.focus();
    }

  };
  onChange(dateProp, value) {
    this.updateDate(dateProp, value);
    this.handleFocus(dateProp, value);
  };

  validate(dateValue) {
    if(moment(dateValue, 'YYYY-MM-DD', true).isValid()) {
      this.setState({error: false});
    } else {
      this.setState({error: true});
    }
  };
  onBlur(e) {
    const currentTarget = e.currentTarget;

    const dayValue = DateOps.padSingleDigit(this.state.day);
    const monthValue = DateOps.padSingleDigit(this.state.month);
    const yearValue = this.state.year;

    const currentValue = `${yearValue}-${monthValue}-${dayValue}`;

    setTimeout(() => {
      if(!currentTarget.contains(document.activeElement)) {
        this.validate(currentValue);
        if(this.state.value !== currentValue) {
          this.props.onChange(currentValue);
        }
        if(this.props.onBlur) {
          this.props.onBlur(currentValue);
        }
      }
    });
  };
  render() {
    return (
      <div>
      <div className={ `${this.state.error ? 'is-invalid' : ''} outline-container` } onBlur={e => this.onBlur(e)}>
        <div id="day-container" className="date--input-container">
          <input
            id={`${this.props.id}-day`}
            ref={input => this.dayInput = input}
            placeholder="DD"
            type="tel"
            maxLength="2"
            className="date--input"
            value={this.state.day}
            onChange={e => this.onChange('day', e.target.value)}
            onBlur={e => this.updateDate('day', e.target.value)}
            disabled={this.props.disabled}
          />
          <span className="date--separator">/</span>
        </div>
        <div id="month-container" className="date--input-container">
          <input
            id={`${this.props.id}-month`}
            ref={input => this.monthInput = input}
            placeholder="MM"
            type="tel"
            maxLength="2"
            className="date--input"
            value={this.state.month}
            onChange={e => this.onChange('month', e.target.value)}
            onBlur={e => this.updateDate('month', e.target.value)}
            disabled={this.props.disabled}
          />
          <span className="date--separator">/</span>
        </div>
        <div id="year-container" className="date--input-container">
          <input
            id={`${this.props.id}-year`}
            ref={input => this.yearInput = input}
            placeholder="YYYY"
            type="tel"
            maxLength="4"
            className="date--input"
            value={this.state.year}
            onChange={e => this.onChange('year', e.target.value)}
            onBlur={e => this.updateDate('year', e.target.value)}
            disabled={this.props.disabled}
          />
        </div>
      </div>
      {this.state.error && <p className="is-invalid">please input a valid date</p>}
      </div>
    )
  }
}

DateInput.propTypes = {
  id: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  disabled: PropTypes.bool,
};

DateInput.defaultProps = {
  disabled: false,
  onChange: () => {},
  onBlur: () => {},
};

export default DateInput;
