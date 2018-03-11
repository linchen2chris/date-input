import React, {Component} from 'react';
import PropTypes from 'prop-types';
import "./DateInput.css";

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

  onChange = (label, value) => {
    this.setState({
      [label]: value,
    });
  };

  render() {
    return (
      <div className="outline-container">
        <div id="day-container" className="date--input-container">
          <input
            id={`${this.props.id}-day`}
            placeholder="DD"
            className="date--input"
            value={this.state.day}
            onChange={e => this.onChange('day', e.target.value)}
          />
          <span className="date--separator">/</span>
        </div>
        <div id="month-container" className="date--input-container">
          <input
            id={`${this.props.id}-month`}
            placeholder="MM"
            className="date--input"
            value={this.state.month}
            onChange={e => this.onChange('month', e.target.value)}
          />
          <span className="date--separator">/</span>
        </div>
        <div id="year-container" className="date--input-container">
          <input
            id={`${this.props.id}-year`}
            placeholder="YYYY"
            className="date--input"
            value={this.state.year}
            onChange={e => this.onChange('year', e.target.value)}
          />
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
