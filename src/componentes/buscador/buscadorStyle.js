import styled from 'styled-components';

export const ContenedorBuscador=styled.div`
width:19vw;
display:flex;


`;
export const FormBuscador=styled.form`
display: flex;
width:15vw;

`;

export const InputBuscador = styled.input`
height: 0.03vh;
width:15vw;

display:inline-block;
justify-content:center;
align-self:center;
padding:15px;
margin-left:25px;


background:rgb(245, 245, 245,0.8);
border:1px solid grey;
border-radius:10px;
color:black;

text-align:center;

 &:focus{
  background-color:white;
  border:1px solid grey;
 }
 &:hover{
  
  border:1px solid black;
 }
  
`;

export const IconoBuscar= styled.button`
width:4vw;
background:rgb(245, 245, 245,0.1);
border:none;

border-radius:10px;

display:inline-block;
align-self:center;

margin-left:10px;

font-size:124%;
cursor:pointer;

&:hover{
  color:white;
}

` ;