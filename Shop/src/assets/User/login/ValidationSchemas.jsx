// src/validation/validationSchemas.js
import * as Yup from 'yup';

export const registerSchema = Yup.object().shape({
  username: Yup.string().required('Name required'),
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().min(6, 'Minimum 6 characters').required('Required'),
  phone: Yup.string().required('Phone number is required'),
});

export const loginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().required('Password required'),
});
