const DateOps = {
  padSingleDigit: dateValue => (
    dateValue.length === 1 ? (dateValue === '0' ? '01' : `0${dateValue}`) : (dateValue === '00' ? '01' : dateValue)
  ),
}

export default DateOps;
