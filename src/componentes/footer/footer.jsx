import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



import {
    ContenedorFooter,
    IconoFacebook,
    IconoInstagram,
    IconoTelefono,
    IconoMail
    
  } from './footerStyle';


  function Footer() {
   
    return (
        <ContenedorFooter>
            <IconoFacebook>
                
               <p><FontAwesomeIcon icon="florin-sign" />  Facebook</p>

            </IconoFacebook>

            <IconoInstagram>
                
                <p>  <FontAwesomeIcon icon="camera-retro" /> Instagram</p>

            </IconoInstagram>

            <IconoTelefono>
                 
                <p> <FontAwesomeIcon icon="phone-flip" /> Teléfono</p>

            </IconoTelefono>


            <IconoMail>
                
                <p> <FontAwesomeIcon icon="envelope"/> Mail</p>

            </IconoMail>           
               
            
              

        </ContenedorFooter>
    );
  }
  
export default Footer;