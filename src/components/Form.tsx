import React from 'react';
import {
  Formik,
  Form as FormikForm,
} from 'formik';

import {FormType} from './Form.type'

function Form(props: FormType) {
  return (
    <Formik {...props}>
      <FormikForm className="needs-validation" noValidate={false}>
          {props.children}
      </FormikForm>
    </Formik>
  )
}

export default Form