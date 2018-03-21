import moment from 'moment';

const getDefaultRules = (dateValue, { minDate, maxDate, invalidError, minDateError, maxDateError }) => {
  let defaultRules = [
    {
      checker: value => moment(dateValue, 'YYYY-MM-DD', true).isValid(),
      errorMessage: invalidError || 'please input a valid date',
    }
  ];
  if (minDate) {
    defaultRules.push({
      checker: value => moment(dateValue).isSameOrAfter(minDate),
      errorMessage: minDateError || 'The date is too early',
    });
  }
  if (maxDate) {
    defaultRules.push({
      checker: value => moment(dateValue).isSameOrBefore(maxDate),
      errorMessage: maxDateError || 'The date is too late',
    });
  }
  return defaultRules;
}

const validator = (value, options, userRules) => {
  const rules = userRules || getDefaultRules(value, options);
  for(let i = 0; i < rules.length; i++) {
    if(!rules[i].checker(value)) {
      return rules[i].errorMessage;
    }
  }
  return null;
}

export default validator;
