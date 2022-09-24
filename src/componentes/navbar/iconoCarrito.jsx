import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { useDispatch } from 'react-redux';

import { abrirCarrito } from '../../redux/carrito/carrito-acciones';

import { CarritoNavbar} from './navbarStyle';

const CartIcon = () => {
  const dispatch = useDispatch();
  return (
    <CarritoNavbar
      onClick={() => {
        dispatch(abrirCarrito());
      }}
    >
            <FontAwesomeIcon icon="cart-shopping"/> 
    </CarritoNavbar>
  );
};

export default CartIcon;