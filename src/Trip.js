import React from 'react'
import './Trip.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';

export default (props) => {

    const { trip, editTrip, deleteTrip, setCountLink, CountLink } = props
    const { id, location, detail, imgUrl, link } = trip


    return (
        <div className='li' >

            <div className='url'>
                <img src={imgUrl} width='350' height='230' />
            </div>
            <div className='name'>
                {location} :
            </div>
            <div className='detail'>
                {detail}
            </div>
            <div className='container'>
                <Button className='edit' variant="outline-primary" onClick={() => editTrip(id)}>Edit</Button>
                <Button className='dele' variant="outline-danger" onClick={() => deleteTrip(id)}>Delete</Button>
                <div className='link'>
                    <Button /*</div>href={link}*/ variant="outline-warning" onClick={() => setCountLink([...CountLink, id])}>Link</Button>
                </div>
            </div>
        </div>
    )
}

