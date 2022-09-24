import React from 'react';


import {
   CardsProductos,
  NombreProducto,
  PrecioProducto,
} from './navbarStyle';


import {
    ContenedorBotones,
    BotonAgregar,
    BotonQuitar
}from '../../paginas/mostrarProductos/mostrarProductosStyle';

import { useDispatch } from 'react-redux';

import { addProduct,removeProduct} from '../../redux/carrito/carrito-acciones';
import { 
    CantidadProductos,
    ImagenProducto,
   

 } from './navbarStyle';

const ModalCartCard = ({ id, title, precio, quantity, img }) => {
  const dispatch = useDispatch();

  return (
    <CardsProductos>
      
      <CantidadProductos> 
         {quantity}
        </CantidadProductos>

      <ImagenProducto src={img}/>

      <NombreProducto >
        {title} 
       </NombreProducto>

       <PrecioProducto>
        {precio * quantity}
        </PrecioProducto>
        
      <ContenedorBotones>  
         <BotonAgregar 
         onClick={e => dispatch(addProduct({ title, img, precio, id }))}>
            +
        </BotonAgregar>


         <BotonQuitar 
         onClick={e => dispatch(removeProduct(id))}>
            -
        </BotonQuitar>

        </ContenedorBotones>
       
          
    </CardsProductos>
  );
};

export default ModalCartCard;