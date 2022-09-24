import styled from "styled-components";


export const FormularioRegister=styled.form`
width:90%;
height:100%;

padding:5px;

display:flex;
justify-content:center;
flex-direction:column;
align-self:center;
align-items:center;

gap:10px;
`

export const BotonRegister=styled.button`
cursor:pointer;

width:45%;
padding:10px;
box-shadow: 10px 5px 5px black;

background:rgba(242, 205, 96);
border-radius:10%;
border:3px inset black;

color:black;
text-align: center;
font-size:105%;
font-family: 'Raleway', sans-serif;
font-weight:700;

&:hover{
   background:rgba(246, 239, 142,0.9);
   
}

`

export const ImagenRegister =styled.div `
width:30vw;
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
