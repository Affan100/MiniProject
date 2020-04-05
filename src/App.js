import React, { useState, useEffect } from 'react';
import './App.css';
import { firestore } from './index';
import Trip from './Trip';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Carousel } from 'react-bootstrap';
import Home from './component/Home';



function App() {

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
    <div >
      <Home />
      <h1>AFFORFUN</h1>
      <h4></h4>
      <input type='text' name='name' onChange={(e) => { setName(e.target.value) }} />
      <div>
        <Button variant="outline-primary" onClick={addTrip}>Submit</Button>
        <Button variant="outline-primary" onClick={addTrip}>AddImage</Button>
      </div>
      <ul className='layer'>{renderTrip()}</ul>
    </div>
  );
}
export default App;
