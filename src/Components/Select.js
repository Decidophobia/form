import React from 'react';
import { Field, ErrorMessage } from 'formik';
import ErrorText from './ErrorText';

function Select(props) {
  const { label, name, options, ...rest } = props;
  return (
    <div className="formContent">
      <label htmlFor={name}>{label}</label>
      <Field as="select" id={name} name={name} {...rest}>
        {options.map((option) => {
          return (
            <option key={option.value} value={option.value}>
              {option.key}
            </option>
          );
        })}
      </Field>
      <ErrorMessage name={name} component={ErrorText} />
    </div>
  );
}

export default Select;
