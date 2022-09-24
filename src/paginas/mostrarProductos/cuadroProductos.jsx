
import React from 'react';

import {CardProductos} from './mostrarProductosStyle';

export const CuadroProductos = ({id,title,img,price,category})=>{

console.log({id,title,img,price,category});
    
    
  return (

    <CardProductos >
                
        <h3>{title}</h3>
        <h3>Precio: ${price}</h3>


    </CardProductos>


   

);
}
export default CuadroProductos;
