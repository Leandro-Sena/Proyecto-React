import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/NavBar/NavBar.css'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
<<<<<<< HEAD
import Cart from './components/Cart/Cart'
=======
>>>>>>> ffd1bda5f14d35d578f26192234cac284fcfb243


function app() {
  return (
    
    <BrowserRouter>
      <NavBar />
      <Routes>
      <Route path='/' element={<ItemListContainer />} />
      <Route path='/category/:idCategory' element={<ItemListContainer />} />
      <Route path='/item/:idItem' element={<ItemDetailContainer />} />
<<<<<<< HEAD
      <Route path='/cart' element={<Cart />} />

      </Routes>

=======
      </Routes>

>>>>>>> ffd1bda5f14d35d578f26192234cac284fcfb243
      </BrowserRouter>
  
  );
}

export default app;
