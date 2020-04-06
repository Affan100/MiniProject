import React from 'react'
import './Trip.css';

export default (props) => {

    const { trip, editTrip, deleteTrip } = props
    const { id, name } = trip

    return (
        <div className='li' >
            <div className='id'>
                {id}
            </div>
            <div className='name'>
                {name}
            </div>
            <div className='container'>
                <button className='btn1' onClick={() => deleteTrip(id)}>Delete</button>
                <button className='btn2' onClick={() => editTrip(id)}>Edit</button>
            </div>
        </div>
    )
}

