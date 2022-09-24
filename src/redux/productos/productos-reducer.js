import { Productos, TotalProductos } from '../../data';
import { SELECCION_PRODUCTO } from './seleccionProductos';

const INITIAL_STATE = { 
    productos: Productos, 
    total: TotalProductos,
    };

export function productosReducer(state = INITIAL_STATE, action) {
    const { type, payload } = action;
    switch (type) {
        
        case
        SELECCION_PRODUCTO:
        return{
            ...state,
            seleccionProducto:payload,
        };
        default:
            return state;
    }
};