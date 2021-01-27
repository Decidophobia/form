import React from 'react';
import Input from './Input';
import Select from './Select';
import Checkbox from './Checkbox';

function FormControl(props) {
  const { control, ...rest } = props;
  switch (control) {
    case 'input':
      return <Input {...rest} />;
    case 'select':
      return <Select {...rest} />;
    case 'checkbox':
      return <Checkbox {...rest} />;
    default:
      return null;
  }
}

export default FormControl;
