import Topbar from './Topbar';
import React, { useState, useEffect } from 'react';
import { firestore } from '../index';
import Trip from '../Trip';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, InputGroup, FormControl } from 'react-bootstrap';
import './Addinput.css';
import Avg from './Avg';

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
    const [CountLink, setCountLink] = useState([]);
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

    let Zero = [{ num: 0, arrayIndex: 1 }, { num: 0, arrayIndex: 2 }, { num: 0, arrayIndex: 3 }, { num: 0, arrayIndex: 4 }, { num: 0, arrayIndex: 5 }];

    useEffect(() => {
        retriveData()
    }, [])

    let MaxArray = [];
    console.log(CountLink)
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
                            setCountLink={setCountLink}
                            CountLink={CountLink}
                        />
                    )
                })
            )
        else
            return (<li>No Trip</li>)

    }

    const addTrip = () => {
        let id = trips.length > 0 ? +trips[trips.length - 1].id + 1 : 1;
        if (id <= 8) {
            firestore.collection('trip').doc(id + ('')).set({ id, location, detail, imgUrl, link })
        }

    }

    let LOOP = []
    const FindMaxtoMin = () => {
        // Zero.num.sort(function (a, b) { return b - a });
        Zero.map((data, index) => {
            // data.num.sort(function (a, b) { return b - a });
            LOOP.push(data.num)
        })
        console.log(LOOP)

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



                <div>
                    {
                        CountLink.map((data, index) => {
                            arr.map((data2, index2) => {
                                if (data === data2) {
                                    Zero[index2].num = Zero[index2].num + 1
                                    console.log(Zero)
                                }
                            })
                        })
                    }
                    <div id='hot'>< Avg Zero={Zero} CountLink={CountLink} trips={trips} /></div>
                </div>
                <div>
                    <button onClick={FindMaxtoMin}>Max</button>
                </div>


            </div>
        </div >
    );
}
export default Addinput;