import Topbar from './Topbar';
import React, { useState, useEffect } from 'react';
import { firestore } from '../index';
import Trip from '../Trip';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, InputGroup, FormControl } from 'react-bootstrap';
import './Addinput.css';

const Addinput = () => {

    const [trips, setTrip] = useState([

        {
            id: 1, location: 'Pakistan', detail: ''
        },
        {
            id: 2, nalocationme: 'Thailand', detail: ''
        }

    ])

    const [location, setLocation] = useState('');
    const [detail, setDetail] = useState('');

    useEffect(() => {
        retriveData()
    }, [])


    const retriveData = () => {

        firestore.collection('trip').onSnapshot((snapshot) => {
            console.log(snapshot.docs)
            const mytrip = snapshot.docs.map(d => {
                const { id, location, detail } = d.data();
                console.log(id, location, detail)
                return { id, location, detail }
            })
            setTrip(mytrip)
        })
    }

    const deleteTrip = (id) => {
        firestore.collection('trip').doc(id + '').delete()
    }

    const editTrip = (id) => {
        firestore.collection('trip').doc(id + '').set({ id, location, detail })
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
        firestore.collection('trip').doc(id + ('')).set({ id, location, detail })
    }

    return (
        <div>
            <Topbar />
            <div >
                <div className="ADD">
                    <h3>Add Trip</h3>

                    <tr>
                        URL Image:<td><input type='text' name='name' onChange={(e) => { setLocation(e.target.value) }} /></td>
                    </tr>
                    <tr>
                        Location    :<td><input type='text' name='name' onChange={(e) => { setLocation(e.target.value) }} /></td>
                    </tr>
                    <tr>
                        Detail :<td><input type='text' onChange={(e) => { setDetail(e.target.value) }} /></td>
                    </tr>


                    <div >
                        <Button variant="outline-primary" onClick={addTrip}>Add</Button>
                        {/* <Button variant="outline-primary" onClick={addTrip}>Image</Button> */}
                    </div>
                </div>

                <div className='layer'>{renderTrip()}</div>

            </div>
        </div >
    );
}
export default Addinput;