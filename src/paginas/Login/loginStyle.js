import styled from "styled-components";


import FotoLoginImg from '../../imagenes/fotologin.jpeg'; 


export const LoginContenedor =styled.div `
width:auto;
height:84vh;

display:flex;
justify-content:center;
align-items:center;
gap:30px;


`;

export const ImagenLogin =styled.div `width:30vw;
height:20vh;
display:flex;
justify-content:center;

align-items:center;
padding:40px;
margin-bottom:1%;

background:rgba(150,25,22,0.4);

border-radius:10px;
h1{

  color:black ;
  font-family: 'Dancing Script', cursive;
  text-shadow:4px 1px white;

  font-size:700%;
  text-align:center;

}
`;

export const ContenedorInputLogin =styled.div `
width:45vw;
height:60vh;


padding:50px;

background:rgba(150,25,22,0.4);
color:black;



`;

export const Formulario=styled.form`
width:100%;
height:100%;

display:flex;
justify-content:center;
flex-direction:column;
align-items:center;

gap:25px;
`

export const InputForm=styled.input`
width:70%;
padding:10px;

border-radius:15% 10%;
border:2px inset grey;

text-align: center;
font-size:105%;
font-family: 'Raleway', sans-serif;
font-weight:700;

&:focus{
    background:rgba(250, 231, 219);
    box-shadow: 10px 5px 5px black;
}

`

export const BotonLogin=styled.button`
cursor:pointer;

width:45%;
padding:10px;
box-shadow: 10px 5px 5px black;

background:rgba(77, 46, 63);
border-radius:10%;
border:3px inset black;

color:white;
text-align: center;
font-size:105%;
font-family: 'Raleway', sans-serif;
font-weight:700;

&:hover{
   background:rgba(115, 48, 76,0.9);
}

`
export const LinkLogin=styled.div`
cursor:pointer;

color:black;
text-align: center;
font-size:100%;
font-family: 'Raleway', sans-serif;
font-weight:700;

&:hover{
   color:white;
   font-size:103%;
}

`