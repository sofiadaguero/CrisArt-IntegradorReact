export const ABRIR_CARRITO='ABRIR_CARRITO';

export const ADD_PRODUCT='ADD_PRODUCT';

export const REMOVE_PRODUCT='REMOVE_PRODUCT';



export const abrirCarrito= ()=>({
   type:ABRIR_CARRITO,
});
export const addProduct = product => ({
   type: ADD_PRODUCT,
   payload: product,
 });
 
 export const removeProduct = ID => ({
   type: REMOVE_PRODUCT,
   payload: ID,
 });
 