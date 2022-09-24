import './App.css';

import React from 'react';

import Routes from './routes/Routes';



import Navbar from './componentes/navbar/navbar';

import Footer from './componentes/footer/footer';


import { library } from '@fortawesome/fontawesome-svg-core';

import { 
  faEnvelope,
   faCartShopping,
   faMagnifyingGlass,
   faPhoneFlip,
   faFlorinSign,
   faCameraRetro
  } from '@fortawesome/free-solid-svg-icons';

library.add(
  faEnvelope,
  faMagnifyingGlass,
  faCartShopping,
  faPhoneFlip,
  faFlorinSign,
  faCameraRetro
  );

function App() {
  return (
  
    <div className="App">
     
     <Navbar/>
    
    
     <Routes/>

     
     <Footer/>
     
    </div>
  

  );
}

export default App;
//Perdón profe, la verdad que fue un trabajo que me costó mucho avanzar, demoré mucho en los diseños que no debería perder tanto tiempo en eso,no pude dar funcionalidad del carrito y el resto está re incompleto.Me frustré mucho, pido mil disculpas por las condiciones del trabajo.Intentaré en el próximo proyecto llegar completo y a tiempo