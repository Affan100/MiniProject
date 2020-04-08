import React, { useState, useEffect } from 'react';
import './App.css';
import { firestore } from './index';
import Trip from './Trip';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
// import Home from './component/Home';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';


//Auth Facebook
import Auth from './component/Auth';

// Top
import Topbar from './component/Topbar';

//Router
import HomePage from './component/HomePage';
import link from './component/Link';


const App = () => {


  return (
    <div>
      <Router>
        <Switch>
          <Route path="/HomePage" component={HomePage} />
          <Route path="/link" component={link} />
          <Topbar />
        </Switch>
      </Router>

      {/* <Topbar />
      <Home /> */}
      {/* <Auth /> */}
      {/* <div className="input">
        
        <h3>Add Trip</h3>
        <input type='text' name='name' onChange={(e) => { setName(e.target.value) }} />


        <div >
          <Button variant="outline-primary" onClick={addTrip}>Add</Button>
          <Button variant="outline-primary" onClick={addTrip}>Image</Button>
        </div>

        <div className='layer'>{renderTrip()}</div>
      </div> */}




    </div>
  );
}
export default App;
