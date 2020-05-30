import React from 'react';
// import cn from 'classnames';
import { Form } from 'semantic-ui-react';
import './FormField.scss';

const FormField = ({
  id,
  name,
  value,
  label,
  placeholder,
  error,
  onChange,
  onBlur,
}) => (
  <Form.Input
    className="FormField-Input"
    width={
      name === 'born'
      || name === 'died'
      || name === 'sex' ? 4 : 12
    }
    error={!!error && { content: error }}
    type="text"
    id={id}
    name={name}
    label={label}
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    onBlur={onBlur}
  />
);

FormField.defaultProps = {
  placeholder: '',
  error: '',
};

export default FormField;
