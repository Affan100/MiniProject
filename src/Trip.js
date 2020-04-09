import React from 'react'
import './Trip.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';

export default (props) => {

    const { trip, editTrip, deleteTrip } = props
    const { id, location, detail } = trip

    return (
        <div className='li' >
            <div className='id'>
                {id}
            </div>
            <div className='url'>
                Photo
            </div>
            <div className='name'>
                {location} :
            </div>
            <div className='detail'>
                {detail}
            </div>
            <div className='container'>
                <Button className='dele' variant="outline-danger" onClick={() => deleteTrip(id)}>Delete</Button>
                <Button className='edit' variant="outline-primary" onClick={() => editTrip(id)}>Edit</Button>
                <div className='link'>
                    <Button variant="outline-warning">Link</Button>
                </div>
            </div>
        </div>
    )
}

