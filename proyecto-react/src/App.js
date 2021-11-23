import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/NavBar/NavBar.css'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';


function app() {
  return (
    
    <BrowserRouter>
      <NavBar />
      <Routes>
      <Route path='/' element={<ItemListContainer />} />
      <Route path='/category/:idCategory' element={<ItemListContainer />} />
      <Route path='/item/:idItem' element={<ItemDetailContainer />} />
      </Routes>

      </BrowserRouter>
  
  );
}

export default app;
