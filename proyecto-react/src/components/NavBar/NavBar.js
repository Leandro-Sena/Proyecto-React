import React from 'react';
import './NavBar.css'
import { Link } from "react-router-dom";
import NavCart from '../NavCart/NavCart';



function NavBar() {
    return (
        <>
            <header>
                <nav className=" barra navbar navbar-expand-lg navbar-dark ">
                    <div className="container-fluid ">
                        <Link to='/' style={{ textDecoration: "none", color: "white" }}><h3>Los Sauces</h3><h5 >Muebleria</h5></Link>
                        <div style={{
                            position: 'absolute', left: '50%', top: '50%',
                            transform: 'translate(-50%, -50%)',
                        }} >
                            <ul className=" nav "  >
                                <li className="nav-item ">
                                    <Link to='/' style={{ textDecoration: "none", color: "black", margin: "-30%" }}>Inico</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to='/category/1' style={{ textDecoration: "none", color: "black", margin: "25%" }}> Produtos</Link>

                                </li>
                                <li className="nav-item">
                                    <Link to='/category/8' style={{ textDecoration: "none", color: "black", margin: "50%" }}>Home&Deco</Link>

                                </li>
                            </ul>
                        </div>

                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDarkDropdown" aria-controls="navbarNavDarkDropdown" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <ul className="navbar-nav">
                            <li className="nav-item dropdown">
                            </li>
                        </ul>
                        <div className="collapse navbar-collapse" id="navbarNavDarkDropdown">

                        </div>
                    </div>

                    <NavCart />
                </nav>

            </header>
            <br />
            <h4 className='text-center text-dark'>Productos</h4>
            <br />
        </>

    )

}

export default NavBar;
