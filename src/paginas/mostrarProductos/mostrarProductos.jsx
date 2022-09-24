import React from 'react';

import{
    ProductosContenedor,
    SeccionCateg,
    SeccionPinturass,
    TituloSeccion,
    ParrafoSeccion,
    SeccionCeramica,
    SeccionProductos,
    CardProductos,
    SeccionPorcelana,
    ContenedorBotones,
    BotonAgregar,
    BotonQuitar,
    ImagenesProductos
    
}from'./mostrarProductosStyle';

import {productos} from '../../data/productos'

function MostrarProductos() {
  
  return (
   <>
    <ProductosContenedor>
     <SeccionProductos>
           
        <SeccionCateg>
      
            <SeccionPinturass>

                   <TituloSeccion>Pinturas</TituloSeccion>
                   <ParrafoSeccion>Trabajos realizados con acrílico,acuarela y óleo</ParrafoSeccion>    

            </SeccionPinturass>
            {productos.filter(product => product.category =='Pinturas').map(filteredPinturas => (
                 <CardProductos>
                  <ImagenesProductos src={filteredPinturas.img}></ImagenesProductos>
                   <h3> {filteredPinturas.title}</h3>
                   <h3> {`$${filteredPinturas.price}`}</h3>

                   <ContenedorBotones>
                         <BotonAgregar> +</BotonAgregar>
                         <BotonQuitar>-</BotonQuitar>
                     </ContenedorBotones>
                 </CardProductos>
             ))}
        </SeccionCateg>

        <SeccionCateg>

           

            {productos.filter(product => product.category =='Cerámica').map(filteredCeramica => (
                 <CardProductos>
                   <ImagenesProductos src={filteredCeramica.img}></ImagenesProductos>
                   <h3> {filteredCeramica.title}</h3>
                   <h3> {`$${filteredCeramica.price}`}</h3>
                   <ContenedorBotones>
                         <BotonAgregar> +</BotonAgregar>
                         <BotonQuitar>-</BotonQuitar>
                     </ContenedorBotones>
                 </CardProductos>
             ))}

             <SeccionCeramica>
               <TituloSeccion>Cerámica</TituloSeccion>
               <ParrafoSeccion>Utensilios realizados con mucha dedicación</ParrafoSeccion>
            </SeccionCeramica>

        </SeccionCateg>


         <SeccionCateg>

           <SeccionPorcelana>
                   <TituloSeccion>Porcelana</TituloSeccion>
                   <ParrafoSeccion>Adornos, souvenirs y lo que desees para tu evento</ParrafoSeccion>
            </SeccionPorcelana>

            {productos.filter(product => product.category =='Porcelana').map(filteredPorcelana => (
                 <CardProductos>
                  <ImagenesProductos src={filteredPorcelana.img}></ImagenesProductos>
                   <h3> {filteredPorcelana.title}</h3>
                   <h3> {`$${filteredPorcelana.price}`}</h3>
                   <ContenedorBotones>
                         <BotonAgregar> +</BotonAgregar>
                         <BotonQuitar>-</BotonQuitar>
                     </ContenedorBotones>
                 </CardProductos>

             ))}

        </SeccionCateg>
            
       </SeccionProductos>
  
     </ProductosContenedor>
  
     </> 
  );
}
export default MostrarProductos;