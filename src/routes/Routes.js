import { Routes as ReactDomRoutes, Route } from 'react-router-dom';

import Home from '../paginas/Home/Home';

import Login from '../paginas/Login/Login';

import Register from '../paginas/Registrarte/Registrarte';

import MiCompra from '../paginas/MiCompra/MiCompra';

function Routes() {
  return (
    <ReactDomRoutes>
       <Route path='/' element={<Home/>}></Route>
       <Route path='home' element={<Home/>}></Route>

       <Route path='login' element={<Login/>}></Route>

       <Route path='register' element={<Register/>}></Route>

       
       <Route path='micompra' element={<MiCompra/>}></Route>


      
    </ReactDomRoutes>
  );
}

export default Routes;