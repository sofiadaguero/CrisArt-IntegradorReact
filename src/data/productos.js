import Oleo from '../imagenes/oleo.jpeg';
import Relieve from '../imagenes/relieve.jpeg';
import Acuarela from '../imagenes/acrilico.jpeg';

import Tazas from '../imagenes/tazas.jpeg';
import Platos from '../imagenes/platos.jpeg';
import Bols from '../imagenes/bols.jpeg';

import Souvenirs from '../imagenes/porc1.webp';
import CentroMesa from '../imagenes/porc2.jpeg';
import Lamparas from '../imagenes/porc3.webp';


export const productos = [
    {
      id: 1,
      title: 'Óleo',
      img: `${Oleo}`,
      price: 3000,
      category: 'Pinturas',
    },
    {
      id: 2,
      title: 'Relieve y acrílico',
      img: `${Relieve}`,
      price: 4000,
      category: 'Pinturas',
    },
    {
      id: 3,
      title: 'Acuarela',
      img: `${Acuarela}`,
      price: 4500,
      category: 'Pinturas',
    },
    {
      id: 4,
      title: 'Tazas con diseños',
      img: `${Tazas}`,  
      price: 500,
      category: 'Cerámica',
    },
    {
      id: 5,
      title: 'Platos con formas',
      img: `${Platos}`,  
      price: 1000,
      category: 'Cerámica',
    },
    {
      id: 6,
      title: 'Bols con detalles',
      img: `${Bols}`,
      price: 1500,
      category: 'Cerámica',
    },

    {
        id: 7,
        title: 'Souvenirs',
        img: `${Souvenirs}`,  
        price: 100,
        category: 'Porcelana',
      },

      {
        id: 8,
        title: 'Centro de mesa',
        img: `${CentroMesa}`,  
        price: 1000,
        category: 'Porcelana',
      },

      {
        id: 9,
        title: 'Lámparas de diseño',
        img: `${Lamparas}`,  
        price: 2500,
        category: 'Porcelana',
      },
   
  ];
//Agrupa los productos de acuerdo a su categoria

  
export const TotalProductos = productos.length;

export const Productos = productos.reduce((acc, product) => {
  if (!acc[product.category]) {
    acc[product.category] = [];
  }
  acc[product.category] = [...acc[product.category], product];

  return acc;
}, {});
