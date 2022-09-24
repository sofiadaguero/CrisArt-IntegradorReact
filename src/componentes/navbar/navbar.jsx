import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



import {
    CarritoNavbar,
    ContenedorLinks,
    NavbarContenedor,
    NavbarUsuario,
  } from './navbarStyle';

  import { useNavigate } from 'react-router-dom';

  function Navbar() {
    const navigate = useNavigate();

    return (
      <NavbarContenedor>
      
        <ContenedorLinks> 
        
          <CarritoNavbar
            onClick={() => {
              navigate('/micompra');
            }}
            >
             <FontAwesomeIcon icon="cart-shopping"/>      
          </CarritoNavbar>
  
          <NavbarUsuario
          onClick={() => {
            navigate('/login');
          }}>
          Iniciar sesión
          </NavbarUsuario>

        </ContenedorLinks>

      </NavbarContenedor>
    );
  }
  
export default Navbar;