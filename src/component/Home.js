import React from 'react';
import './Home.css'
import Topbar from './Topbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Carousel } from 'react-bootstrap';

const Home = () => {

    return (

        <div>
            <Topbar />

            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://static.asiawebdirect.com/m/phuket/portals/thaiwave-com/homepage/pagePropertiesOgImage/thailand.jpg.jpg"
                        height="650"
                        alt="Second slide" />
                    <Carousel.Caption>
                        <h3>Thailand Trip</h3>
                        <p>Arrived Bangkok. Had no problems finding where to get cab on the first floor, no problems with the cab driver.</p>
                        <Button variant="primary" href='http://www.thailand-guide.com/'>More</Button>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <div ><img
                        className="d-block w-100"
                        src="https://f.ptcdn.info/319/056/000/p4n3k4kvy6x5zDvh08A-o.jpg"
                        height="650"
                        alt="First slide" /></div>
                    <Carousel.Caption>
                        <h3>Pakistan Trip</h3>
                        <p>In 2019, the authorities tightened their control over freedom of expression.</p>
                        <Button variant="info" href='https://pantip.com/topic/37405007'>More</Button>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://www.eatchillwander.com/wp-content/uploads/2018/05/dubai-cover.jpg"
                        height="650"
                        alt="Third slide" />

                    <Carousel.Caption>
                        <h3>Dubai Trip</h3>
                        <p>  Located in the eastern part of the Arabian Peninsula on the coast of the Persian Gulf, Dubai aims to be the business hub of Western Asia.</p>
                        <Button variant="warning" href='https://paidonnnn.com/tag/%E0%B9%80%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%A2%E0%B8%A7%E0%B8%94%E0%B8%B9%E0%B9%84%E0%B8%9A-%E0%B9%81%E0%B8%95%E0%B9%88%E0%B8%87%E0%B8%95%E0%B8%B1%E0%B8%A7%E0%B8%A2%E0%B8%B1%E0%B8%87%E0%B9%84%E0%B8%87/'>More</Button>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://cdn.shortpixel.ai/client/q_glossy,ret_img,w_1000/https://www.beartai.com/wp-content/uploads/2019/03/Malaysia-Cover.jpg"
                        height="650"
                        alt="four slide" />

                    <Carousel.Caption>
                        <h3>Malaysia Trip</h3>
                        <p>Malaysia is a country that yields a rich mix of cultural attractions and rapidly expanding cities filled.</p>
                        <Button variant="success" href='http://www.visit-malaysia.com/'>More</Button>
                    </Carousel.Caption>
                </Carousel.Item>


            </Carousel>
        </div>
    );
}

export default Home;