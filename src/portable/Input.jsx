import { TextField } from '@mui/material';
import { useFormikContext } from 'formik';
import React from 'react';
import propTypes from 'prop-types';

Input.propTypes = {
  children: propTypes.node,
  name: propTypes.string,
}

export default function Input({ name, children, ...defaultProps }) {
  const { handleChange, errors, setFieldTouched, touched, values } = useFormikContext();

  return (
    <TextField
      fullWidth
      error={Boolean(name && touched[name] && errors[name])}
      helperText={name && touched[name] && errors[name]}
      name="firstName"
      value={name && values[name]}
      onChange={name && handleChange(name)}
      onBlur={() => name && setFieldTouched(name)}
      {...defaultProps}
    >
      {children}
    </TextField>
  );
}
