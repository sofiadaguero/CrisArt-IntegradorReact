import styled from 'styled-components';


export const ContenedorCategorias=styled.div`
width:50vw;
heigth:auto;
display:flex;
gap:100px;

margin-left:100px;

`;

export const CategoriaCuadrito = styled.div`
height: 50vh;
width:18vw;
padding:4%;

display:flex;
align-items:center;
align-self:center;
align-content:center;
justify-content:center;


box-shadow: 10px 5px 5px black;

border-radius:150%;
border-radius-top:25%;
border-bottom-right-radius:500%;
border-bottom-left-radius:500%;
border-left-radius:800%;

color:black;
font-family: 'Raleway', sans-serif;
font-weight:700;
font-size:150%;


text-align:center;

&:hover{
  color:white;
  
  
  box-shadow: 5px 10px 10px black;

  
}


`
//Me parece que no funciona l fondo de imagen por los node.childs
//ya que al ponerle firstchil.funciona por supuesto en la primer imagen,pero el HOVER NO FUNCIONAAAAAAAAAAA

//background-position: center;
//background-repeat: no-repeat;
//background-size: cover;
//background-position-x: center;