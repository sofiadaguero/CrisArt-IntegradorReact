import React from 'react';


import  CategoriaFigu  from './categoriaFigu';

import { ContenedorCategorias  } from './categoriasStyle';
  
import {CategoriasData} from '../../data/categoriasData'

function Categorias() {
  
  return (
  <ContenedorCategorias>

        {CategoriasData.map(category=>(
        <CategoriaFigu key={category.id} {...category} />
       
        )           
        )}


  </ContenedorCategorias>

   

);
}
export default Categorias;