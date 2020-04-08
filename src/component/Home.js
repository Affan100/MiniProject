import React from 'react';
import './Home.css'
import { Carousel } from 'react-bootstrap';

const Home = () => {

    return (
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
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://www.planet-ride.com/wp-content/uploads/2017/03/ka2.jpg"
                    height="650"
                    alt="First slide" />
                <Carousel.Caption>
                    <h3>Pakistan Trip</h3>
                    <p>In 2019, the authorities tightened their control over freedom of expression.</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://www.jatiewpainai.com/wp-content/uploads/2019/11/IMG_1865-2.jpg"
                    height="650"
                    alt="Third slide" />

                <Carousel.Caption>
                    <h3>Dubai Trip</h3>
                    <p>  Dubai Desert Safari With Quad Biking At Red Dunes Lahbab Desert.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default Home;