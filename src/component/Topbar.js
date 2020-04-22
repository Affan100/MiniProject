import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import React, { Component } from 'react';
import './Auth.css';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase';


const Topbar = () => {

    return (
        <div >
            <nav class="navbar navbar-expand-lg navbar-light bg-light" >
                <img
                    src="https://cdn1.iconfinder.com/data/icons/travel-line-good-life/512/map-512.png"
                    className='imgpage' width='55' height='55' />

                <div class="collapse navbar-collapse" id="navbarSupportedContent" >
                    <ul class="navbar-nav mr-auto">
                        <div >
                            <li class="nav-item active">
                                <div className="tap">
                                    <a href='#home' class="flex-sm-fill text-sm-center nav-link active " >HOME <span class="sr-only">(current)</span></a>
                                </div>
                            </li>
                        </div>

                        <div className='berM'>
                            <li class="nav-item active">
                                <div >
                                    <a href='#moretrip' class="nav-link " >MoreTrip</a>
                                </div>
                            </li>

                            <div className='berH'>
                                <li >
                                    <div >
                                        <a class="nav-link " href="#hot">Tracker Covid</a>
                                    </div>
                                </li>
                            </div>
                        </div>
                        <div className="navbar topbar">
                            <div className="user">
                                <img alt='' className='img' width='50px' src={firebase.auth().currentUser.photoURL} />
                                <span className='email'>{firebase.auth().currentUser.email}</span>
                            </div>
                            <span className='logout'>
                                <Button variant="danger" onClick={() => firebase.auth().signOut()}>Logout</Button>
                            </span>
                        </div>


                    </ul>
                </div>
            </nav>

        </div>
    );

}

export default Topbar;