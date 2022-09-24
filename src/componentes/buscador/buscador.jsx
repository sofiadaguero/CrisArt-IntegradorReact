import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
   ContenedorBuscador,
   InputBuscador,
   IconoBuscar,    
   FormBuscador
  } from './buscadorStyle';
  
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {seleccionProducto} from '../../redux/productos/seleccionProductos';

import {productos} from '../../data/productos'

export const TodosProductos = productos.map(productos=>productos.title);

function Buscador() {
   const [value,setValue]=useState('');

   const dispatch = useDispatch();

   const { productos } = useSelector(state => state.productos);


   const onSubmit = (e, value) => {
    e.preventDefault();
    

    const ProductoBuscado = value.toLowerCase().trim().replaceAll(' ', '');

    const existe = TodosProductos.find(value => value.toLowerCase() === ProductoBuscado);

    if (!existe) {
      return alert('No existe ese producto,intenta con otro');
    }
    else{
      alert ('Si está!Se encuentra en nuestras secciones')
      dispatch(seleccionProducto(existe));
    
    setValue('');
    }
    //dispatch y value, ver si funciona. No encuentraa los productos con mas de una palabra

  };


    return (      
      <ContenedorBuscador>
        <FormBuscador onSubmit={e => onSubmit(e, value)}>
        <InputBuscador 
         type='text'
         placeholder="Buscar producto"
         value={value}
         onChange={e =>setValue(e.target.value)}
          />

        <IconoBuscar
         onClick={e => onSubmit(e, value)} 
         type='submit'>
        <FontAwesomeIcon icon="magnifying-glass"  /> 
        </IconoBuscar>
        </FormBuscador>

      </ContenedorBuscador>

    );
  }
  
export default Buscador;

//no le puse en scrooll porque no me funcionaba