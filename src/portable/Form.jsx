import { Formik } from 'formik';
import React from 'react';
import propTypes from 'prop-types';

Form.propTypes= {
  initialValues: propTypes.object,
  onSubmit: propTypes.func,
  children: propTypes.node,
  validationSchema: propTypes.object,
}

export default function Form({ initialValues, onSubmit, validationSchema, children }) {
  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
      {() => <div>{children}</div>}
    </Formik>
  );
}
