import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';


const Topbar = () => {

    return (
        <div>

            <nav class="navbar navbar-expand-lg navbar-light bg-light">

                <Link to='/'>
                    <a class="navbar-brand" href="/">AFFORFUN</a>
                </Link>

                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">

                            <Link to='/HomePage'>
                                <a class="nav-link" href="HomePage">Home <span class="sr-only">(current)</span></a>
                            </Link>

                        </li>
                        <li class="nav-item">

                            <Link to='/App_Your_Trip'>
                                <a class="nav-link" href="#">Add Your Trip</a>
                            </Link>

                        </li>
                        <li class="nav-item">
                            <a class="nav-link disabled" href="#">Trip</a>
                        </li>
                    </ul>
                    <form class="form-inline my-2 my-lg-0">
                        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
            </nav>
        </div>
    );

}

export default Topbar;