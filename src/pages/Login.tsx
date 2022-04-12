import {useState} from 'react';
import Form from 'components/Form';
import {loginValidationSchema} from './Login.config'
import TextField from 'components/TextField'

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
      <div className="flex justify-center">
      <div className="w-full max-w-xs">
        <div className="text-lg mb-5">Signin</div>
        <Form
          enableReinitialize
          initialValues={formData}
          onSubmit={onSubmit}
          validationSchema={loginValidationSchema}>
            <TextField name={'username'} placeholder={'Username'}/>
            <TextField name={'password'} placeholder={'Password'}/>
        </Form>
        <div className="flex justify-between items-center mb-6">
          <a href="#!" className="text-gray-800">Forgot password?</a>
        </div>
        <p className="text-sm font-semibold mt-2 pt-1 mb-0">
          Don't have an account?
          <a
            href="#!"
            className="text-red-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out"
            >Register</a
          >
        </p>
      </div>
      </div>
    </div>
  )
}

export default Login