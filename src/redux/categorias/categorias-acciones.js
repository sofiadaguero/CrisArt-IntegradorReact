export const SELECCION_CATEGORIA = 'SELECT_CATEGORY';

export const seleccionCategoria = category => ({
  type: SELECCION_CATEGORIA,
  payload: category,
});