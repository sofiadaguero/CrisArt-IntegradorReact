import React from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { seleccionCategoria } from '../../redux/categorias/categorias-acciones';

import {CategoriaCuadrito} from './categoriasStyle';




export const CategoriaFigu = ({id, img,title,backgroundColor,category})=>{


  const dispatch =useDispatch();
    
  return (

    <CategoriaCuadrito 
        selected={false}
        onClick={e => dispatch(seleccionCategoria(category))}
        style={{
          backgroundColor: backgroundColor,
          
                  }}
        >
      
       
        <h2>{title}</h2>


    </CategoriaCuadrito>


   

);
}
export default CategoriaFigu;
