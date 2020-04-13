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

  const [main, setMain] = useState(false);

  const imgUrlArray = [];
  const [imgUrl, setImgUrl] = useState('');




  return (
    <div>
      {/* <Carousel>
        <img
          src="https://image.freepik.com/free-vector/grey-white-abstract-background-modern-design_42421-314.jpg"
          height="720"
          width='1600' />
        <Carousel.Caption> */}
      <div className="auth" ><Auth /></div>
      {/* </Carousel.Caption>
      </Carousel> */}


    </div>
  );
}
export default App;
