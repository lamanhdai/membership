import {useState} from 'react';
import Form from 'components/Form';
import {loginValidationSchema} from './Login.config'
import TextField from 'components/TextField'
import { useHistory } from "react-router-dom";

function Login() {
  let history = useHistory();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const onSubmit = (values:any, { setSubmitting }: {setSubmitting: any}) => {
    console.log(values)
    history.push('/account')
    setSubmitting(false);
  }

  return (
    <div className="container mx-auto grid grid-cols-2" style={{marginTop: '120px'}}>
      <div className="col-start-2 shadow-lg p-[40px]">
        <div className="text-lg mb-5 text-center">Signin</div>
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
          <a href="/account" className="text-red-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out">Register</a>
        </p>
      </div>
    </div>
  )
}

export default Login