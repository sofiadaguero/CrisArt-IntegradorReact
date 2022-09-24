import styled from "styled-components";

import FondoPinturas from '../../imagenes/pinturas.webp';

import FondoCeramica from '../../imagenes/ceramica.webp';

import FondoPorcelana from '../../imagenes/porcelanaFria.jpg';

import FondoProduct from '../../imagenes/fondo1.jpeg'


export const ProductosContenedor =styled.div `
margin-top:-100px;
margin-left:79px;
`;

export const SeccionProductos=styled.div`
width:100%;
height:100%;

display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
align-self:center;

padding:21.3px;
margin-top:210px;
gap:10px;


background-image: url(${FondoProduct}) ;
background-position: center;
background-repeat: repeat-y;
background-size: cover;
background-attachment: fixed;

background-position-x: center;
`;

export const SeccionCateg =styled.div`
width:100%;
height:100vh;
display:flex;

justify-content:center;
align-items:center;
align-self:center;

margin-top:5%;
gap:25px;


padding:20px;
background:rgba(11, 19, 43,0.4);

`;

export const SeccionPinturass=styled.div`

width:24vw;
height:85vh;

display:flex;
flex-direction:column;
justify-content:center;
align-items:center;

background-image:url(${FondoPinturas});
background-position: center;
background-repeat: no-repeat;
background-size: cover;
background-position-x: center;
box-shadow: 5px 10px 10px black;


border-radius:150%;
border-radius-top:25%;
border-bottom-right-radius:500%;
border-bottom-left-radius:500%;
border-left-radius:800%;


`;

export const  TituloSeccion=styled.h2`
margin-top:4px;
font-family: 'Dancing Script', cursive;
text-shadow:4px 1px white;
font-size:350%;

`;

export const ParrafoSeccion=styled.p`
margin-bottom:-4px;
color:black; 
text-shadow:1px 1px white;
font-family: 'Raleway', sans-serif;
font-weight:800;
font-size:130%;
text-align:center;
`;


export const CardProductos=styled.div`
width:19vw;
height:50vh;
padding:8px;
margin-left:2px;


display:flex;
flex-direction:column;
justify-content:center;
align-items:center;


border-radius:1000%;
box-shadow: 8px 6px 6px black;

background:rgba(89, 41, 65,0.9);


color:white;

text-shadow:1px 1px black;
text-align:center;
font-family: 'Raleway', sans-serif;
font-weight:800;
font-size:110%;

h3{
    margin-top:-2px;
    padding:-2px;
};

&:hover{    
    box-shadow: 13px 9px 9px black;
}



`;

export const ImagenesProductos=styled.img`
width:17vw;
height:35vh;
padding:15px;

background-position: center;
background-repeat: no-repeat;
background-size: cover;
background-position-x: center;

border-radius:1000%;
border-top:2px solid black;
border-bottom:1px solid black;

&:hover{
    height:36vh;
}

`
export const ContenedorBotones=styled.div`
width:5vw;
heigth:auto;

margin-bottom:28%;
`;

export const BotonAgregar=styled.button`
width:2.5vw;
heigth:auto;

border-radius:20%;
background:rgba(105, 242, 135,0.6);
font-size:100%;
font-weight:900;
border:1px solid black;

&:hover{    
background:rgba(105, 242, 135,0.9);
}

`;
export const BotonQuitar=styled.button`
width:2.5vw;
heigth:auto;

border-radius:20%;
background:rgba(241, 96, 85,0.6);
font-size:100%;
font-weight:900;
border:1px solid black;

&:hover{    
background:rgba(241, 96, 85,0.9);
}


`;


export const SeccionCeramica=styled.div`

width:24vw;
height:85vh;

display:flex;
flex-direction:column;
justify-content:center;
align-items:center;

background-image:url(${FondoCeramica});
background-position: center;
background-repeat: no-repeat;
background-size: cover;
background-position-x: center;
box-shadow: 5px 10px 10px black;


border-radius:150%;
border-radius-top:25%;
border-bottom-right-radius:500%;
border-bottom-left-radius:500%;
border-left-radius:800%;


`;

export const SeccionPorcelana=styled.div`

width:24vw;
height:85vh;

display:flex;
flex-direction:column;
justify-content:center;
align-items:center;

background-image:url(${FondoPorcelana});
background-position: center;
background-repeat: no-repeat;
background-size: cover;
background-position-x: center;
box-shadow: 5px 10px 10px black;


border-radius:150%;
border-radius-top:25%;
border-bottom-right-radius:500%;
border-bottom-left-radius:500%;
border-left-radius:800%;


`;
//display:flex;
//flex-direction:column;
//justify-content:center;
//align-items:center;
//align-self:center;
//
//background-color:red;