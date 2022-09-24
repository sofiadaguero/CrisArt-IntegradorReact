
export const SELECCION_PRODUCTO = 'SELECCION_PRODUCTO';

export const seleccionProducto = productos => ({
  type: SELECCION_PRODUCTO,
  payload: productos,
});

//payload: state.productos,*modifique para ver si puedo hacer andar el buscador

//import { productos, TodosProductos } from "../../data";
//
//export const SELECCION_PRODUCTO = 'SELECCION_PRODUCTO';
//
//export const seleccionProducto = productos => ({
//  type: SELECCION_PRODUCTO,
//  payload: title,
//});
//