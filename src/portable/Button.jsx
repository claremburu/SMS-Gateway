import { LoadingButton } from '@mui/lab';
import { useFormikContext } from 'formik';
import React from 'react';
import propTypes from 'prop-types';

Button.propTypes = {
  children: propTypes.node,
  submit: propTypes.bool,
  onClick: propTypes.func,
  outlined: propTypes.bool,
  fullWidth: propTypes.bool,
  size: propTypes.oneOf(['small', 'medium', 'large']),
}

export default function Button({
  children,
  submit,
  onClick,
  outlined,
  fullWidth,
  size,
  ...defaultProps
}) {
  const formikContext = useFormikContext();

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <div style={{ position: 'relative', width: fullWidth && '100%' }}>
        <LoadingButton
          variant={outlined ? 'outlined' : 'contained'}
          size={size || 'medium'}
          style={{
            marginTop: 4,
            marginBottom: 4
          }}
          color="primary"
          onClick={submit ? formikContext.handleSubmit : onClick}
          fullWidth={fullWidth}
          {...defaultProps}
        >
          {children || 'Button'}
        </LoadingButton>
      </div>
    </div>
  );
}
