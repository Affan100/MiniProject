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


const App = () => {

  const [main, setMain] = useState(false);

  const imgUrlArray = [];
  const [imgUrl, setImgUrl] = useState('');




  return (
    <div>
      {/* <Router>
        <Switch>
          <Route path="/HomePage" component={HomePage} />
          <Route path="/App_Your_Trip" component={addinput} />
          <Route path="/Hot" component={toptrip} />
          <Topbar />
        </Switch>
      </Router> */}

      {/* <Avg imgUrl={imgUrlArray} /> */}

      {/* <Topbar />
      <Home /> */}

      <Auth />

      {/* <div className="input">
        
        <h3>Add Trip</h3>
        <input type='text' name='name' onChange={(e) => { setName(e.target.value) }} />


        <div >
          <Button variant="outline-primary" onClick={addTrip}>Add</Button>
          <Button variant="outline-primary" onClick={addTrip}>Image</Button>
        </div>

        <div className='layer'>{renderTrip()}</div>
      </div> */}




    </div >
  );
}
export default App;
