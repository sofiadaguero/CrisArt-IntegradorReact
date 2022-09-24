import React from 'react';

import {
    MenuPrincipalContenedor,ContenedorHome,ContenedorNombreInput, NombrePagina
  } from './HomeStyle';

import Buscador from '../../componentes/buscador/buscador';

import MostrarProductos from '../../paginas/mostrarProductos/mostrarProductos';

import Categorias from '../../componentes/categorias/categorias'



function Home() {
  
  return (
   
  < MenuPrincipalContenedor>


     <ContenedorHome>
       <ContenedorNombreInput>

              <NombrePagina>CrisArt</NombrePagina>
             
               <Buscador></Buscador>
                          
                 
        </ContenedorNombreInput>
  
          <Categorias></Categorias>

      </ContenedorHome>

            <MostrarProductos></MostrarProductos>

            
      </MenuPrincipalContenedor>

);
}
export default Home;