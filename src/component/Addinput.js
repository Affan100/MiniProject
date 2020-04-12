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
            id: 1, location: 'Pakistan', detail: '', imgUrl: '', link: ''
        },
        {
            id: 2, nalocationme: 'Thailand', detail: '', imgUrl: '', link: ''
        }

    ])

    const [location, setLocation] = useState('');
    const [detail, setDetail] = useState('');
    const [imgUrl, setImgUrl] = useState('');
    const [link, setLink] = useState('');

    useEffect(() => {
        retriveData()
    }, [])


    const retriveData = () => {

        firestore.collection('trip').onSnapshot((snapshot) => {
            console.log(snapshot.docs)
            const mytrip = snapshot.docs.map(d => {
                const { id, location, detail, imgUrl, link } = d.data();
                console.log(id, location, detail, imgUrl, link)
                return { id, location, detail, imgUrl, link }
            })
            setTrip(mytrip)
        })
    }

    const deleteTrip = (id) => {
        firestore.collection('trip').doc(id + '').delete()
    }

    const editTrip = (id) => {
        firestore.collection('trip').doc(id + '').set({ id, location, detail, imgUrl, link })
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
        firestore.collection('trip').doc(id + ('')).set({ id, location, detail, imgUrl, link })
    }

    return (
        <div>
            <Topbar />
            <div >
                <div className="ADD">

                    <div className='topic'><InputGroup.Text > <div className='font'><h3>Add Trip</h3></div></InputGroup.Text></div>

                    <tr>
                        Location :
                        <td>
                            <FormControl
                                placeholder="Location"
                                aria-label="Location"
                                aria-describedby="basic-addon1"
                                onChange={(e) => { setLocation(e.target.value) }} />
                        </td>
                    </tr>

                    <tr>
                        <InputGroup.Prepend >
                            URL Image :
                        </InputGroup.Prepend>
                        <td>
                            <FormControl
                                placeholder="URL"
                                aria-label="URL"
                                aria-describedby="basic-addon1"
                                onChange={(e) => { setImgUrl(e.target.value) }} />
                        </td>
                    </tr>

                    <tr>
                        Airlines :
                        <td>
                            <FormControl
                                placeholder="Link"
                                aria-label="Airlines"
                                aria-describedby="basic-addon1"
                                onChange={(e) => setLink(e.target.value)} />
                        </td>
                    </tr>

                    <tr>
                        <InputGroup.Prepend>
                            Detail :
                        </InputGroup.Prepend>
                        <td className='details'>
                            <FormControl
                                placeholder='Detail...'
                                as="textarea"
                                aria-label="With textarea"
                                onChange={(e) => { setDetail(e.target.value) }} />
                        </td>
                    </tr>



                    {/* <tr>
                        URL Image:<td><input type='text' name='name' onChange={(e) => { setLocation(e.target.value) }} /></td>
                    </tr>
                    <tr>
                        Location    :<td><input type='text' name='name' onChange={(e) => { setLocation(e.target.value) }} /></td>
                    </tr>
                    <tr>
                        Detail :<td><input type='text' onChange={(e) => { setDetail(e.target.value) }} /></td>
                    </tr>
                    <tr>
                        Airlines    :<td><input type='text' name='name' onChange={(e) => { setLocation(e.target.value) }} /></td>
                    </tr> */}





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