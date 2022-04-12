import * as Yup from 'yup';

const loginValidationSchema = Yup.object().shape({
  username: Yup.string()
      .required('Required')
      .min(1, "Required"),
  password: Yup.string()
        .required('Required')
        .min(1, "Required"),
});

export {loginValidationSchema}