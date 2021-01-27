import React from 'react';
import { Field, ErrorMessage } from 'formik';
import ErrorText from './ErrorText';

function Input(props) {
  const { label, name, ...rest } = props;
  return (
    <div className="formContent">
      <label htmlFor={name}>{label}</label>
      <Field id={name} name={name} {...rest} />
      <ErrorMessage name={name} component={ErrorText} />
    </div>
  );
}

export default Input;
