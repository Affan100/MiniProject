import React, { useState, useEffect } from 'react';
import './Avg.css';
import Topbar from './Topbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ProgressBar } from 'react-bootstrap';
import axios from 'axios'

const Avg = () => {

    const [covid, setCovid] = useState({});

    useEffect(() => {

        axios.get('https://coronavirus-tracker-api.herokuapp.com/v2/locations')
            .then(function (response) {
                console.log(response.data);

                const { latest } = response.data
                setCovid({ confirmed: latest.confirmed, deaths: latest.deaths })
            })
            .catch(function (error) {
                console.log(error);
            })

    }, [])


    return (
        <div >
            <Topbar />
            <div className='con'>
                <div style={{ marginTop: 10, padding: 20 }}>
                    <img src='https://storage.googleapis.com/techsauce-prod/ugc/uploads/2020/3/Screen_Shot_2563-03-20_at_17.32.01.png' width='1180' height='500' />

                    <div style={{ width: 1180, marginTop: 5 }}>
                        <h3>เกาะติดสถานการณ์ COVID 19</h3>
                        <h4>Confirmed :</h4>
                        <h7>ยืนยันผู้ติดเชื้อทั่วโลก :</h7>
                        <ProgressBar animated now={80} variant="warning" label={covid.confirmed} />
                        <h4 style={{ marginTop: 7 }}>Deaths :</h4>
                        <h7>เสียชีวิตทั่วโลก :</h7>
                        <ProgressBar animated now={70} variant="danger" label={covid.deaths} />
                    </div>
                </div>
            </div>


            <div className='con2'>
                <div className='call'>

                    <div className='block1'>
                        <img width="150" height="56" src="https://www.phuket.psu.ac.th/wp-content/uploads/2018/10/PSU_PHUKET-ft-150x56.png" />
                    </div>

                    <div className='block3'>
                        Mr.Affan Pathan <br />
                   Student ID: 6035512016 <br />
                   Faculty of Engineering <br />
                   Prince of Songkla University, Phuket Campus <br />
            80 Moo 1 Vichitsongkram Road., Kathu, Phuket 83120, Thailand
                </div>
                    <div className='block2'>
                        <a style={{ fontSize: 18 }}>Contact</a><br />
                        <img src='https://i.pinimg.com/originals/9e/b3/84/9eb384eb1d9d09e82bcef6852d38085c.png' width="40" height="40" />:
                            <a style={{ marginLeft: 5 }} href='https://www.facebook.com/affan.pathan.5203' className="btn btn-primary">Affan Pathan</a><br />

                        <img src='https://i.pinimg.com/originals/e8/8b/a5/e88ba54a1be984fc2eb030b6b602ed27.png' width="40" height="40" />:
                            <a style={{ marginLeft: 5 }} href='https://www.instagram.com/af_fan_pt/' className="btn btn-danger">af_fan_pt</a><br />
                    </div>

                </div>
            </div>

        </div>
    )
}
export default Avg;