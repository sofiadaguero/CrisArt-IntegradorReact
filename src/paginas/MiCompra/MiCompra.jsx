import React from 'react';

import{
    MiCompraContenedor,
    TituloCompra,
    ContenedorCarrito,
    TitulosCarrito,
    TotalCarrito,
    ContenedorInput,
    InputDireccionEnvio,
    InpuTelEnvio,
    BotonPagar
    
}from'./MiCompraStyle'


function MiCompra() {
  
  return (

   < MiCompraContenedor >

     <TituloCompra>Mi compra</TituloCompra>

     <ContenedorCarrito>
        <TitulosCarrito>PRODUCTO</TitulosCarrito>

        <TitulosCarrito>CANTIDAD</TitulosCarrito>

        <TitulosCarrito>PRECIO</TitulosCarrito>        

     </ContenedorCarrito>

     
    <TotalCarrito>TOTAL:</TotalCarrito>     
    
    <ContenedorInput>
         Dónde lo enviamos?

        <InputDireccionEnvio type= 'text'placeholder='Dirección de entrega'></InputDireccionEnvio>
    
        <InpuTelEnvio  type= 'tel' placeholder='Telefono de contacto'></InpuTelEnvio>

    </ContenedorInput>
     
     <BotonPagar> Pagar!</BotonPagar>
        
   </MiCompraContenedor>


   
  );
}
export default MiCompra;