import styled from 'styled-components';

import { motion } from 'framer-motion';


export const NavbarContenedor = styled.div`
  width:auto;
  
  height: 3vh;
  padding:20px;

  
  background:rgba(10, 11, 9,0.5);

  font-family: 'Raleway', sans-serif;

`;


export const ContenedorLinks = styled.div`
 
  color: white;
  font-size:110%;
  display: flex;
  justify-content: end;
 
  gap: 60px;
  
`;

export const CarritoNavbar = styled.button`

  cursor: pointer;
  heigth: 10%;
  width:auto;
 
`;

export const NavbarUsuario = styled.div`
  margin-rigth:15px;
  gap: 20px;
  cursor: pointer;
  text-align:center;
`;

export const ImagenUsuario = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 100px;
  cursor: pointer;
`;



export const ContenedorCarritoToggle=styled.div`

width: 25vw;
height: 100vh;
padding: 30px;


position: fixed;
top: 0;
right: 0;
z-index: 99;

display: flex;
flex-direction: column;
align-items:center;
align-items:center;


background-color:white;
border-radius: 10px;
border-left:2px solid black;
box-shadow:  -16px 10px 5px 0px rgba(0,0,0,0.75) ;


`;

export const BotonCerrar=styled.button`
width:2vw;
height: 3vh;
padding:5px;

display:flex;
align-items:center;

align-self:flex-start;
background-color:black;
color:white;
text-align:center;

cursor:pointer;
`;

export const TituloCarrito=styled.div`
width:25vw;
height:14vh;
padding:0px;
border-bottom:1px solid black;


h3{

  text-align:center;
  color:black ;
  font-family: 'Dancing Script', cursive;
  text-shadow:4px 1px white;
  font-size:200%;
  
};


`;


export const ContenedorProductos=styled.div`
width:24vw;
height:60vh;
margin-top:5px;
padding:6px;
background-color:yellow;
display:flex;
`;



export const ContenedorTotal=styled.div`
width:24vw;
height:4vh;
margin-top:5px;
padding:6px;
background-color:purple;

display:flex;
align-items:center;

 p{
  text-align:center;
  font-size:140%;
 }

 `;

 export const ContenedorBotonPagar=styled.div`
width:25vw;
height:3vh;



 `;

 export const BotonPagar=styled.button`
 width:25vw;
height:auto;
 margin-top:5px;
 padding:6px;
 background-color:black;
 
 display:flex;
 flex-direction:column;
 align-self:center;
 align-items:center;
 
color:white;
text-align:center;
font-size:140%;
 
 cursor:pointer;
 `;

 export const ModalOverlayStyled = styled(motion.div)`
 position: fixed;
 top: 0;
 left: 0;
 z-index: 50;
 width: calc(100vw - 450px);
 height: 100vh;
 ${({ isHidden }) =>
   !isHidden &&
   `
     backdrop-filter: blur(4px);
   `}
`;

export const CardsProductos=styled.div`
 width:24vw;
 height:2vh;
 padding:5px;

 display:flex;
 align-items:center;
 gap:5px;

 background-color:black;

`;
export const CantidadProductos=styled.div`
 width:2vw;
 height:2vh;
 padding:5px;

 display:flex;
 align-items:center;
 gap:5px;

 background-color:green;

`;

export const ImagenProducto=styled.img`
width:5vw;
heigth:2vh;
border-radius:10px;

display:flex;
background-position: center;
background-repeat: repeat-y;
background-size: cover;
background-attachment: fixed;

background-position-x: center;


`;

export const NombreProducto=styled.h3`
width:5vw;
heigth:auto;

font-size:110%;
`;
export const PrecioProducto=styled.h4`
width:5vw;
heigth:auto;

font-size:110%;
`;
 /*
 
 
 
 
 */