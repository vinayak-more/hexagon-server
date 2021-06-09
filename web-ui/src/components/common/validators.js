const Validators = () => {
  function required(value) {
    return !value ? this.fieldName + " is Required" : undefined;
  }
  function min(value) {
    return value.length < this.min
      ? this.fieldName + " should have " + this.min + " characters"
      : undefined;
  }
  function max(value) {
    return value.length > this.max
      ? this.fieldName + " should have " + this.max + " characters"
      : undefined;
  }
  function number(value) {
    return isNaN(value) ? this.fieldName + " should be a number" : undefined;
  }
  return { required, min, max, number };
};

export default Validators;
