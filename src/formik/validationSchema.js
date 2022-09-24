import * as Yup from 'yup';

export const checkoutValidationSchema = Yup.object({
  name: Yup.string().required('Campo requerido'),
  cellphone: Yup.string().required('Campo requerido'),
  locality: Yup.string().required('Campo requerido'),
  address: Yup.string().required('Campo requerido'),
});

export const registerValidationSchema = Yup.object({
  name: Yup.string().required('Campo requerido'),
  email: Yup.string()
    .email('Email inválido')
    .required('Campo requerido'),
  password: Yup.string()
    .min(8, 'Minimo 8 caracteres')
    .required('Campo requerido'),
});

export const loginValidationSchema = Yup.object({
  email: Yup.string().email('Email inválido').required('Campo Requerido'),
  password: Yup.string()
    .min(8, 'Mínimo de caracteres: 8')
    .required('Campo Requerido'),
});

export const forgotPasswordSchema = Yup.object({
  email: Yup.string().email('Email no valido').required('Campo Requerido'),
});