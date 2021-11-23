import React from 'react';
import './NavBar.css'
import NavCart from '../NavCart/NavCart';



function NavBar() {
    return (
        <>
            <header>
                <nav className=" barra navbar navbar-expand-lg navbar-dark ">
                    <div className="container-fluid ">
                        <a className="navbar-brand " href="inicio" ><h3>Los Sauces</h3><h5 >Muebleria</h5> </a>
                        <div style={{
                            position: 'absolute', left: '50%', top: '50%',
                            transform: 'translate(-50%, -50%)',
                        }} >
                            <ul className=" nav "  >
                                <li className="nav-item ">
                                    <a className="nav-link active text-secondary " aria-current="page" href="inicio">Inicio</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-secondary" href="productos">Productos</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-secondary" href="home&deco">Home&Deco</a>
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
