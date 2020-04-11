import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import { BrowserRouter as Link } from 'react-router-dom';
import Auth from './Auth';
import './Auth.css';

const Topbar = () => {

    return (
        <div>

            <nav class="navbar navbar-expand-lg navbar navbar-dark bg-dark">

                {/* <a class="navbar-brand" href="/">AFFORFUN</a> */}

                <img src="https://cdn1.iconfinder.com/data/icons/travel-line-good-life/512/map-512.png" className='imgpage' width='55' height='55' />


                <div class="collapse navbar-collapse" id="navbarSupportedContent" >
                    <ul class="navbar-nav mr-auto">

                        <nav variant="pills" defaultActiveKey="/HomePage">
                            <li class="nav-item active">
                                <div className="tap">
                                    <Link to='/HomePage'>
                                        {/* <a class="nav-link nav-item active" href="HomePage">Home <span class="sr-only">(current)</span></a> */}
                                        <a class="flex-sm-fill text-sm-center nav-link active " href="HomePage" >Home <span class="sr-only">(current)</span></a>
                                    </Link>
                                </div>
                            </li>
                        </nav>

                        <li class="nav-item active">

                            <Link to='/App_Your_Trip'>
                                <a class="nav-link" href="App_Your_Trip">MoreTrip</a>
                            </Link>

                        </li>

                        <li class="nav-item active">

                            <Link to='/Hot_Trip'>
                                <a class="nav-link " href="Hot">Hot_trip</a>
                            </Link>

                        </li>
                    </ul>

                    <Auth />

                    {/* <form class="form-inline my-2 my-lg-0">
                        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form> */}

                </div>
            </nav>
        </div>
    );

}

export default Topbar;