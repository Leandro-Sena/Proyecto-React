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
                                    <Link to='/' style={{ textDecoration: "none", color: "black", margin: "-30%" }}>Inicio</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to='/category/CJeUqH9OYyNsBU89zxQW' style={{ textDecoration: "none", color: "black", margin: "25%" }}> Produtos</Link>

                                </li>
                                <li className="nav-item">
                                    <Link to='/category/7dLHe6Owz9BwvuDeDenK' style={{ textDecoration: "none", color: "black", margin: "50%" }}>Home&Deco</Link>

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

                   <Link to='/cart' style={{ textDecoration: "none"}} ><NavCart /></Link>
                </nav>

            </header>
        </>

    )

}

export default NavBar;
