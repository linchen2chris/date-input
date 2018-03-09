import React, {Component} from 'react';
import PropTypes from 'prop-types';

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
      };
    }
    return {
      year: '',
      month: '',
      day: '',
      value: '',
    }
  }

  render() {
    return (
      <div>
        <div id="day-container">
          <input
            id={`${this.props.id}-day`}
            value={this.state.day}
          />
          <span>/</span>
        </div>
        <div id="month-container">
          <input
            id={`${this.props.id}-month`}
            value={this.state.month}
          />
          <span>/</span>
        </div>
        <div id="year-container">
          <input
            id={`${this.props.id}-year`}
            value={this.state.year}
          />
          <span>/</span>
        </div>
      </div>
    )
  }
}

DateInput.propTypes = {
  id: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
};

export default DateInput;