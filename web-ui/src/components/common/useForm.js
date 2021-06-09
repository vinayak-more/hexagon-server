import { useState } from "react";

const useForm = (state, validators) => {
  const [values, setValues] = useState(state);
  const [errors, setErrors] = useState();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };
  const handleSubmit = (e, callback) => {
    e.preventDefault();
    if (validate()) {
      callback();
    }
  };
  const validate = () => {
    const keys = Object.keys(validators);
    let validate = {};
    keys.forEach((field) => {
      validate = {
        ...validate,
        [field]: performValidation(validators[field], values[field]),
      };
    });
    setErrors(validate);
    return !Object.keys(validate).some((key) => validate[key]);
  };
  const performValidation = (validationFns, value) => {
    if (Array.isArray(validationFns)) {
      const fn = validationFns.find((fn) => !!fn(value));
      return fn ? fn(value) : undefined;
    } else {
      return validationFns(value);
    }
  };
  return { values, handleChange, handleSubmit, errors };
};

export default useForm;
