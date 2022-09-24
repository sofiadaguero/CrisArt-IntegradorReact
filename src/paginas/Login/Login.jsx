import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik } from 'formik' ;   

import{
    LoginContenedor,
    ImagenLogin,
    ContenedorInputLogin,
    Formulario,
    InputForm,
    BotonLogin,
    LinkLogin
    
}from'./loginStyle'


function Login() {
  const navigate = useNavigate();

  return (

   < LoginContenedor >
    
    <ImagenLogin>  <h1>CrisArt </h1></ImagenLogin>
     
              
    <ContenedorInputLogin>
      <Formik>

      <Formulario >

           <InputForm id='nombreUsuario' type='text' placeholder='Ingrese su usuario'></InputForm>
           <InputForm id='contraseñaUsuario' type='password' placeholder='Ingrese su contraseña'></InputForm>

           <BotonLogin type='submit'>Ingresar</BotonLogin>
           
           <LinkLogin> Olvidé mi contraseña</LinkLogin>
           <LinkLogin onClick={() => {
            navigate('/register');
          }}> No tengo usuario, voy a registrarme!</LinkLogin>
           

      </Formulario>
      </Formik>
    </ContenedorInputLogin>
   
        
   </LoginContenedor>
   
  );
}
export default Login;