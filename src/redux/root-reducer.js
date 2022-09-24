import { combineReducers } from 'redux';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';
import { carritoReducer } from './carrito/carrito-reducer';

import { categoriasReducer } from './categorias/categorias-reducer';
import { productosReducer } from './productos/productos-reducer';

const rootReducer = combineReducers({
    categoriasData: categoriasReducer,

    productos:productosReducer,

    carrito:carritoReducer,

});


export default persistReducer({
    key:'global',
    storage,
    whitelist:[],//persiste todo

},
rootReducer
);

