import logo from './logo.svg';
import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row } from 'react-bootstrap';

function app() {
  return (
    <NavBar class={Row}></NavBar>
  );
}

export default app;
