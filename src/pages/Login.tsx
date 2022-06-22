import {useState} from 'react';
import Form from 'components/Form';
import {loginValidationSchema} from './Login.config'
import TextField from 'components/TextField'
import SubmitButton from 'components/SubmitButton'
import { useHistory } from "react-router-dom";

import './Login.css'

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
    <div className="container mx-auto" style={{paddingTop: '120px'}}>
      
      <div className="shadow-xl p-[40px] max-w-lg mx-auto">
        <div className="text-lg mb-5 text-center font-bold">Welcome To Membership</div>
        <svg xmlns="http://www.w3.org/2000/svg" width="218" height="218" viewBox="0 0 218 218" fill="none" className="solid_circle">
          <circle cx="109" cy="109" r="109" fill="#D3E1A8"/>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="201" height="408" viewBox="0 0 201 408" fill="none" className="big_circle">
          <path d="M201 339.866C183.421 339.866 166.015 336.352 149.775 329.524C133.534 322.696 118.778 312.688 106.348 300.072C93.918 287.455 84.0581 272.478 77.3311 255.994C70.6041 239.51 67.1418 221.842 67.1418 204C67.1418 186.158 70.6041 168.49 77.3311 152.006C84.0581 135.522 93.9181 120.544 106.348 107.928C118.778 95.3117 133.534 85.3039 149.775 78.476C166.015 71.6481 183.421 68.1338 201 68.1338" stroke="#FF9595" stroke-width="2"/>
          <path d="M197 294C185.444 294 174 291.672 163.324 287.149C152.647 282.626 142.946 275.997 134.775 267.64C126.603 259.282 120.121 249.361 115.699 238.442C111.276 227.522 109 215.819 109 204C109 192.181 111.276 180.478 115.699 169.558C120.121 158.639 126.603 148.718 134.775 140.36C142.946 132.003 152.647 125.374 163.324 120.851C174.001 116.328 185.444 114 197 114" stroke="#FF9595" stroke-width="2"/>
          <path d="M201 373.433C179.079 373.433 157.372 369.051 137.119 360.536C116.866 352.021 98.4641 339.541 82.9633 323.807C67.4625 308.074 55.1666 289.396 46.7776 268.839C38.3887 248.283 34.0709 226.25 34.0709 204C34.0709 181.75 38.3887 159.717 46.7776 139.161C55.1666 118.604 67.4625 99.9261 82.9633 84.1928C98.4641 68.4595 116.866 55.9791 137.119 47.4643C157.372 38.9495 179.079 34.567 201 34.567" stroke="#FF9595" stroke-width="2"/>
          <path d="M201 407C174.736 407 148.728 401.749 124.463 391.548C100.198 381.346 78.1504 366.393 59.5787 347.543C41.007 328.692 26.2751 306.314 16.2242 281.685C6.17322 257.056 1.00007 230.658 1.00007 204C1.00008 177.342 6.17322 150.944 16.2242 126.315C26.2751 101.686 41.007 79.3076 59.5787 60.4573C78.1504 41.607 100.198 26.6541 124.463 16.4524C148.728 6.25074 174.736 0.999997 201 1" stroke="#FF9595" stroke-width="2"/>
        </svg>
        
        
        <Form
          enableReinitialize
          initialValues={formData}
          onSubmit={onSubmit}
          validationSchema={loginValidationSchema}>
            <TextField name={'username'} placeholder={'Username'}/>
            <TextField name={'password'} placeholder={'Password'} type="password"/>
            <SubmitButton label={'Login'} />
        </Form>
        <div className="flex justify-between items-center mb-2 mt-4">
          <a href="#!" className="text-gray-800">Forgot password?</a>
        </div>
        <p className="text-sm font-semibold mt-2 pt-1 mb-0">
          Don't have an account?
          <a href="/account" className="text-red-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out"> Register</a>
        </p>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" width="274" height="137" viewBox="0 0 274 137" fill="none" className="small_circle">
        <path d="M45.9762 137C45.9762 125.047 48.3306 113.21 52.905 102.167C57.4793 91.1233 64.1841 81.0889 72.6364 72.6366C81.0887 64.1843 91.1231 57.4795 102.167 52.9052C113.21 48.3308 125.046 45.9764 137 45.9764C148.953 45.9764 160.79 48.3308 171.833 52.9051C182.877 57.4795 192.911 64.1843 201.363 72.6366C209.816 81.0889 216.52 91.1233 221.095 102.167C225.669 113.21 228.023 125.047 228.023 137" stroke="#FF9595" stroke-width="2"/>
        <path d="M23.4881 137C23.4881 122.093 26.4242 107.333 32.1287 93.5609C37.8332 79.789 46.1944 67.2756 56.7349 56.735C67.2755 46.1945 79.7889 37.8333 93.5608 32.1288C107.333 26.4243 122.093 23.4882 137 23.4882C151.906 23.4882 166.667 26.4243 180.439 32.1288C194.211 37.8333 206.724 46.1945 217.265 56.735C227.805 67.2756 236.167 79.789 241.871 93.5609C247.576 107.333 250.512 122.093 250.512 137" stroke="#FF9595" stroke-width="2"/>
        <path d="M1.00001 137C1.00001 119.14 4.51775 101.455 11.3524 84.9551C18.187 68.4548 28.2047 53.4623 40.8335 40.8335C53.4622 28.2047 68.4548 18.187 84.955 11.3524C101.455 4.51775 119.14 1.00001 137 1.00001C154.86 1.00001 172.545 4.51775 189.045 11.3524C205.545 18.187 220.538 28.2047 233.167 40.8335C245.795 53.4623 255.813 68.4548 262.648 84.9551C269.482 101.455 273 119.14 273 137" stroke="#FF9595" stroke-width="2"/>
        </svg>
    </div>
  )
}

export default Login