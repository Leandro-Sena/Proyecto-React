import React from 'react';
import NavBar from './components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/NavBar/NavBar.css'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
// import ItemListContainer from './components/ItemListContainer/ItemListContainer';


function app() {
  return (
    <>
      <NavBar />
      <ItemDetailContainer />
      {/* <ItemListContainer /> */}

    </>
  );
}

export default app;
