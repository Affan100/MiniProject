import React from 'react';
import './Avg.css';
import Topbar from './Topbar';


const Avg = (props) => {
    const { Zero, trips } = props;
    const { imgUrl } = props;
    console.log("#############")
    console.log(trips)
    return (
        <div >
            <Topbar />
            <img src={imgUrl} width='350' height='230' />

        </div>
    )
}
export default Avg;