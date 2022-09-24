import Pinturas from '../imagenes/pinturas.webp';
import Ceramica from '../imagenes/ceramica.webp';
import Porcelana from '../imagenes/porcelanaFria.jpg';

export const CategoriasData = [
    {
      id: 1,
      title: 'Pinturas',
      img: `${Pinturas}`,
      backgroundColor:'rgba(254, 72, 789,0.6)',
      category: 'Pinturas',
      
    },
    {
      id: 2,
      title: 'Ceramica',
      img: `${Ceramica}`,
      backgroundColor:'rgb(163, 121, 201,0.7)',
      category: 'Cerámica',   
    },
    {
      id: 3,
      title: 'Porcelana',
      img: `${Porcelana}`,
      backgroundColor:'rgb(23, 79, 100,0.7)',
      category: 'Porcelana',
    },
  ];
