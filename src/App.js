import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './component/Login';
import { Button, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className='container'>
      <p>MyProduct</p>
      <div>
        <Button variant="primary">Sign up with Facebook </Button>
      </div>
    </div>
  );
}

export default App;
