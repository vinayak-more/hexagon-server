import React from "react";
import { Form } from "react-bootstrap";

const Select = ({ options, caption, ...rest }) => {
  const captionFn = caption || ((item) => item.name);
  const option =
    options &&
    options.map((item, index) => (
      <option key={index} value={item.id}>
        {captionFn(item)}
      </option>
    ));
  return (
    <Form.Control
      as="select"
      {...rest}
      style={{ backgroundPosition: "right calc(.375em + 1.188rem) center" }}
    >
      <option value="">Select</option>
      {option}
    </Form.Control>
  );
};

export default Select;
