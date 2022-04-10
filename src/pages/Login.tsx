import React, {useState} from 'react';
import Form from 'components/Form';
import {loginValidationSchema} from './Login.config'

function Login() {
  const [formData, setFormData] = useState({
    phone: "",
    password: "",
  });

  const onSubmit = (values:any, { setSubmitting }: {setSubmitting: any}) => {
    console.log(values);
    setSubmitting(false);
  }

  return (
    <div>
      Login
      <div>
        <Form
          enableReinitialize
          initialValues={formData}
          onSubmit={onSubmit}
          validationSchema={loginValidationSchema}>

        </Form>
      </div>
    </div>
  )
}

export default Login