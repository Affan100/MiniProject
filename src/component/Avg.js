import React from 'react';
import './Avg.css';
import Topbar from './Topbar';

const Avg = (props) => {

    const { imgUrl } = props

    return (
        <div>
            <Topbar />

            <img src={imgUrl} width='350' height='230' />
        </div>
    )
}
export default Avg;