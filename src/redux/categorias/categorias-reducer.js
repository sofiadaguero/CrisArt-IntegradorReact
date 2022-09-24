import { CategoriasData } from '../../data';
import { SELECCION_CATEGORIA } from './categorias-acciones';

const INITIAL_STATE = {
     categoriasData: CategoriasData,
     seleccionCategoria: null,
};

export const categoriasReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case SELECCION_CATEGORIA:
      return {
        ...state,
        seleccionCategoria: payload ,
      };
    default:
      return state;
  }
};