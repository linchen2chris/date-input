const validator = (rules, value, option) => {
  for(let i = 0; i < rules.length; i++) {
    if(!rules[i].checker(value, option)) {
      return rules[i].errorMessage;
    }
  }
  return null;
}

export default validator;
