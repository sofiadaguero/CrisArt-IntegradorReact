import React from 'react';


import { AnimatePresence } from 'framer-motion';

import ProductosCarritoNavbar from './productoCarrito';

import {
ContenedorCarritoToggle,
BotonCerrar,
TituloCarrito,
ContenedorProductos,
ContenedorTotal,
ContenedorBotonPagar,
BotonPagar,

ModalOverlayStyled  
} from './navbarStyle';

import { useDispatch, useSelector } from 'react-redux';

import { abrirCarrito } from '../../redux/carrito/carrito-acciones';

const AbirCarritoNavbar = () => {
  const dispatch = useDispatch();

  const { visible, costoTotal } = useSelector(state => state.cart);

  return (
    <>
    {visible && (
        <ModalOverlayStyled
          onClick={() => {
            dispatch(abrirCarrito());
          }}
          isHidden={!visible}
        />
      )}

      <AnimatePresence>
        {visible &&( 
          <ContenedorCarritoToggle
          initial={{ translateX: 600 }}
          animate={{ translateX: 0 }}
          exit={{ translateX: 600 }}
          transition={{ type: 'spring', damping: 27 }}
          >
     
        
        <BotonCerrar
        
        whileTap={{ scale: 0.95 }}>
          X</BotonCerrar>

         <TituloCarrito> 
            <h3>Mi Carrito</h3>
        </TituloCarrito> 

         <ContenedorProductos> 
          <ProductosCarritoNavbar/>
 
        </ContenedorProductos>

         <ContenedorTotal> 
          <p>Total: $ {costoTotal}</p>
         </ContenedorTotal>
         
         <ContenedorBotonPagar>
         <BotonPagar>PAGAR</BotonPagar>

         </ContenedorBotonPagar>

         </ContenedorCarritoToggle>
        )}
     </AnimatePresence>
   </>
  );
};

export default AbirCarritoNavbar;