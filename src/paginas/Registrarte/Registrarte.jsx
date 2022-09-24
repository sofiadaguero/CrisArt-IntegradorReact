import React from 'react';
import  { useNavigate } from 'react-router-dom';
import { Formik } from 'formik';
import {
  LoginContenedor,
  ContenedorInputLogin,
  InputForm,
  LinkLogin

}from '../Login/loginStyle';

import{
     FormularioRegister,
     BotonRegister,
     ImagenRegister,
}from'./RegistrarteStyle'


function Register() {
  const navigate = useNavigate();

  return (
   <LoginContenedor>

    <ContenedorInputLogin>
      <Formik>
      <FormularioRegister>
        <InputForm id='nombreRegistro' type='text' placeholder='Nombre'></InputForm>

        <InputForm id='apellidoRegistro' type='text' placeholder='Apellido'></InputForm>

        <InputForm id='emailRegistro' type='email' placeholder='E-mail'></InputForm>

        <InputForm id='telefonoRegistro' type='tel' placeholder='N° de teléfono'></InputForm>

        <InputForm id='usuarioRegistro' type='text' placeholder='Nombre de usuario'></InputForm>

        <InputForm id='contraseñaRegistro' type='password' placeholder='Contraseña'></InputForm>

        <BotonRegister type='submit'
        >Registrarme!</BotonRegister>

        <LinkLogin
        onClick={() => {
          navigate('/login');}}>
          Ya tengo cuenta, iniciar sesión
          </LinkLogin>       

      
      </FormularioRegister>
      </Formik>
    </ContenedorInputLogin>

    <ImagenRegister>
      <h1>Register</h1>
    </ImagenRegister>


   </LoginContenedor>
  );
}
export default Register;