import styled from "styled-components";

export const MiCompraContenedor =styled.div `
width:auto;
height:84vh;

display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
gap:20px;

background:rgba(244, 103, 103,0.5);

color:black;
font-family: 'Raleway', sans-serif;
font-weight:800;
font-size:150%;
`;

export const TituloCompra=styled.div`
width:70vw;
heigth:25vh;

padding:5px;


text-align:center;
color:black ;
font-family: 'Dancing Script', cursive;
text-shadow:4px 1px white;
font-size:220%;


background:rgba(166, 142, 119,0.6);
box-shadow: 10px 5px 5px black;

`;


export const ContenedorCarrito=styled.div` 
width:70vw;
heigth:75vh;


background:rgba(166, 142, 119,0.6);
box-shadow: 1px 5px 5px black;

display:flex;

`;

export const TitulosCarrito=styled.div`
width:25vw;
heigth:20vh;

text-align:center;

padding:10px;

border-bottom:2px solid black;

background:rgba(166, 142, 119,0.6);
box-shadow: 1px 5px 5px black;

`;

export const TotalCarrito=styled.div`
width:68vw;
heigth:15vh;

padding:15px;

display:flex;
flex-direction:column;

border-top:2px solid black;
border-bottom:2px solid black;

text-align:end;
text-shadow:4px 1px white;


background:rgba(166, 142, 119,0.6);
box-shadow: 1px 5px 5px black;


`

export const ContenedorInput=styled.div`
width:60vw;
heigth:30vh;
padding:15px;

display:flex;
justify-content:center;
align-items:center;
gap:50px;


background:rgba(166, 142, 119,0.6);
box-shadow: 1px 5px 5px black;


`;



export const InputDireccionEnvio=styled.input`
width:15vw;
padding:10px;


align-items:flex-start;


text-align: center;
font-size:70%;
font-family: 'Raleway', sans-serif;
font-weight:700;


border-radius:15% 10%;
border:2px inset grey;

&:hover{
    background:rgba(246, 239, 142);
    border-color:purple;
    color:black;

    
    box-shadow: 10px 5px 5px black;
}


`;

export const InpuTelEnvio=styled.input`
width:15vw;
padding:10px;


text-align: center;
font-size:70%;
font-family: 'Raleway', sans-serif;
font-weight:700;


border-radius:15% 10%;
border:2px inset grey;

&:hover{
    background:rgba(246, 239, 142);   
    border-color:purple;
    color:black;

    
    box-shadow: 10px 5px 5px black;
}
`;

export const BotonPagar=styled.button`
width:20vw;
padding:10px;

border-radius:15% 10%;
border:2px inset black;
box-shadow:20px white;


box-shadow: 1px 4px 3px black;

background:rgba(68, 56, 80,0.9);

color:white;

font-family: 'Raleway', sans-serif;
text-shadow:2px 1px black;
font-size:100%;

&:hover{
    border:2px inset purple;
    background:rgba(143, 123, 163,0.6);
    color:black;   
    text-shadow:1px 1px white;
    box-shadow: 10px 5px 5px black;
}

`