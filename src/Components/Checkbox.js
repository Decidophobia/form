import React from 'react';
import { Field, ErrorMessage } from 'formik';
import ErrorText from './ErrorText';

function Checkbox(props) {
  const { label, name, options, ...rest } = props;
  return (
    <div className="checkboxField">
      <label name={name}>{label}</label>
      <Field name={name} {...rest}>
        {({ field }) => {
          return options.map((option) => {
            return (
              <React.Fragment key={option.key}>
                <input
                  type="checkbox"
                  id={option.value}
                  {...field}
                  value={option.value}
                  checked={field.value.includes(option.value)}
                />
                <label htmlFor={option.value}>Принимаю <a href="##">условия</a> использования</label>
              </React.Fragment>
            );
          });
        }}
      </Field>
      <ErrorMessage name={name} component={ErrorText} />
    </div>
  );
}

export default Checkbox;
