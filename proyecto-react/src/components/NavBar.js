// import React from 'react';

function NavBar() {
    return (
        <>
            <header>
                <nav class=" barra navbar navbar-expand-lg navbar-dark ">
                    <div class="container-fluid ">

                        <a class="navbar-brand " href="#" ><h3>Los Sauces</h3><h5 class="" >Muebleria</h5> </a>


                        <div  style={{
                            position: 'absolute', left: '50%', top: '50%',
                            transform: 'translate(-50%, -50%)',
                            colors:' #88aaaa'
                        }} >
                            <ul class=" nav "  >
                                <li class="nav-item ">
                                    <a class="nav-link active text-secondary" aria-current="page" href="#">Inicio</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link text-secondary" href="#">Productos</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link text-secondary" href="#">Home & Deco</a>
                                </li>
                            </ul>
                        </div>

                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDarkDropdown" aria-controls="navbarNavDarkDropdown" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>

                        <ul class="navbar-nav">
                            <li class="nav-item dropdown">
                            </li>
                        </ul>
                        <div class="collapse navbar-collapse" id="navbarNavDarkDropdown">

                        </div>
                    </div>
                </nav>
            </header>
        </>
    )

}
export default NavBar;