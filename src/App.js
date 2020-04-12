import React, { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Home from './component/Home';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
// import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
// import firebase from 'firebase';


//Auth Facebook
import Auth from './component/Auth';
import Avg from './component/Avg';

// Top
import Topbar from './component/Topbar';

//Router
import HomePage from './component/HomePage';
import addinput from './component/Addinput';
import toptrip from './component/Avg';

import Addinput from './component/Addinput';


const App = () => {

  const [main, setMain] = useState(false);

  const imgUrlArray = [];
  const [imgUrl, setImgUrl] = useState('');




  return (
    <div >
      <div className="bgd">
        <Auth />
      </div>
    </div>
  );
}
export default App;
