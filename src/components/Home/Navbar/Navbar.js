import React from 'react';
import logo from '../../../pics/logos/Group 1329.png';
const Navbar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-transparent">
                <a class="navbar-brand" href="#">
                    <img style={{height: '50px'}} src={logo} alt=""/>
                </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ml-auto">
                    <li class="nav-item active mr-5">
                        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item mr-5" >
                        <a class="nav-link" href="#">Donation</a>.
                    </li>
                    <li class="nav-item mr-5">
                        <a class="nav-link" href="#">Event</a>
                    </li>
                    <li class="nav-item mr-5">
                        <a class="nav-link" href="#">Blog</a>
                    </li>
                    <li class="nav-item mr-2">
                        <a class="nav-link" href="/register">
                        <button type="button" class="btn btn-primary">Register</button>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">
                            <button type="button" class="btn btn-dark">Admin</button>
                        </a>
                    </li>
                    
                    </ul>
                    
                </div>
                </nav>
        </div>
    );
};

export default Navbar;