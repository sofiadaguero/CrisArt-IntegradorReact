import {
     ABRIR_CARRITO,
     REMOVE_PRODUCT,
     ADD_PRODUCT  
    
    } from "./carrito-acciones";

    import { addItemCart, removeItemCart } from './carrito-global';

const INITIAL_STATE={
    items:[],
    costoTotal:0,

    visible:false,
};



export const carritoReducer=(state=INITIAL_STATE,action)=>{
    const {type, payload}=action;
    switch (type){
        case ABRIR_CARRITO:
            return{
                ...state,
                visible:!state.visible,
            };
            case ADD_PRODUCT:
                const nuevoProducto = addItemCart(state.items, payload);
                const subTotal = nuevoProducto.reduce(
                  (sub, item) => (sub += item.precio * item.quantity),
                  0
                );
                return {
                  ...state,
                  items: nuevoProducto,
                  costoTotal: subTotal,
                };
              case REMOVE_PRODUCT:
                const productoRemovido = removeItemCart(state.items, payload);
                const subtotalModificado = productoRemovido.reduce(
                  (sub, item) => (sub += item.precio * item.quantity),
                  0
                );
                return {
                  ...state,
                  items: productoRemovido,
                  costoTotal: subtotalModificado,
                };
                default:
                    return state;
    }
};