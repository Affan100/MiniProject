import React from 'react';
import './Avg.css';
import Topbar from './Topbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, ProgressBar } from 'react-bootstrap';

const Avg = (props) => {

    const { Zero, trips } = props;
    const { imgUrl } = props;
    console.log("#############")
    console.log(trips)

    return (
        <div >
            <Topbar />
            {/* <img src={imgUrl} width='350' height='230' /> */}
            <div className='con'>
                <div style={{ marginTop: 10, padding: 20 }}>
                    <img src='https://f.ptcdn.info/337/036/000/1444637082-cover3-o.jpg' width='350' height='230' />

                    <div style={{ width: 500, marginTop: 5 }}>
                        <h4>ชอบ</h4>
                        <ProgressBar animated now={80} variant="danger" label='80%' />
                        <h4 style={{ marginTop: 7 }}>ความประทับใจ</h4>
                        <ProgressBar animated now={60} variant="warning" label='60%' />
                        <h4 style={{ marginTop: 7 }}>ค่าใช้จ่าย</h4>
                        <ProgressBar animated now={90} variant="info" label='90%' />
                    </div>


                    <div style={{ marginTop: 10 }}>
                        <img src='https://www.tourismthailand.org/images/Default/facebook/default-share.jpg' width='350' height='230' />

                        <div style={{ width: 500, height: 500, marginTop: 5 }}>
                            <h4>ชอบ</h4>
                            <ProgressBar animated now={20} variant="danger" label='20%' />
                            <h4 style={{ marginTop: 7 }}>ความประทับใจ</h4>
                            <ProgressBar animated now={10} variant="warning" label='10%' />
                            <h4 style={{ marginTop: 7 }}>ค่าใช้จ่าย</h4>
                            <ProgressBar animated now={70} variant="info" label='70%' />
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}
export default Avg;