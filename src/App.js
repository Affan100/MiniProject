import React, { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Carousel } from 'react-bootstrap';
// import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
// import firebase from 'firebase';


//Auth Facebook
import Auth from './component/Auth';
import Avg from './component/Avg';

// Top
import Topbar from './component/Topbar';


const App = () => {

  return (
    <div>

      <div><Auth /></div>

    </div>
  );
}
export default App;
