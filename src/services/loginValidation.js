import * as yup from 'yup';

const SIX_CHAR = 6;

const validateLogin = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(SIX_CHAR).required(),
});

export default validateLogin;
