import React, { useState, useEffect } from 'react';
import './App.css';
import { firestore } from './index';
import Trip from './Trip';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import Home from './component/Home';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';


//Auth Facebook
import Auth from './component/Auth';

// Top
import Topbar from './component/Topbar';

//Router
import Notpage from './pages/Notpage';
import MainPage from './pages';



const App = () => {

  const [trips, setTrip] = useState([

    {
      id: 1, name: 'Pakistan'
    },
    {
      id: 2, name: 'Thailand'
    }

  ])

  const [name, setName] = useState('');

  useEffect(() => {
    retriveData()
  }, [])


  const retriveData = () => {

    firestore.collection('trip').onSnapshot((snapshot) => {
      console.log(snapshot.docs)
      const mytrip = snapshot.docs.map(d => {
        const { id, name } = d.data();
        console.log(id, name)
        return { id, name }
      })
      setTrip(mytrip)
    })
  }

  const deleteTrip = (id) => {
    firestore.collection('trip').doc(id + '').delete()
  }

  const editTrip = (id) => {
    firestore.collection('trip').doc(id + '').set({ id, name })
  }


  const renderTrip = () => {
    if (trips && trips.length)
      return (
        trips.map((trips, index) => {
          return (
            <Trip key={index} trip={trips}
              deleteTrip={deleteTrip}
              editTrip={editTrip}

            />
          )
        })
      )
    else
      return (<li>No Trip</li>)

  }

  const addTrip = () => {
    let id = trips.length > 0 ? +trips[trips.length - 1].id + 1 : 1;
    firestore.collection('trip').doc(id + ('')).set({ id, name })
  }

  return (
    <div>
      {/* <Topbar />
      <Home />

      <div className="input">
        <Auth />
        <h3>Add Trip</h3>
        <input type='text' name='name' onChange={(e) => { setName(e.target.value) }} />


        <div >
          <Button variant="outline-primary" onClick={addTrip}>Add</Button>
          <Button variant="outline-primary" onClick={addTrip}>Image</Button>
        </div>

        <div className='layer'>{renderTrip()}</div>
      </div> */}
      <Router>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/404" component={Notpage} />
        </Switch>
      </Router>

    </div>
  );
}
export default App;
