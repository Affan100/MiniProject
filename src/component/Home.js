import React from 'react';
import './Home.css'
import { Carousel } from 'react-bootstrap';

const Home = () => {

    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://grasshoppercdn.s3.amazonaws.com/wp-content/uploads/2019/06/Destination-Japan-Slider-Past-Meets-future-1024x683.jpg"
                    height="720"
                    alt="First slide" />
                <Carousel.Caption>
                    <h3>Japan Trip</h3>
                    <p>Shinto shrines are places of worship and the dwellings of the kami.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://static.asiawebdirect.com/m/phuket/portals/thaiwave-com/homepage/pagePropertiesOgImage/thailand.jpg.jpg"
                    height="720"
                    alt="Second slide" />

                <Carousel.Caption>
                    <h3>Thailand Trip</h3>
                    <p>Arrived Bangkok. Had no problems finding where to get cab on the first floor, no problems with the cab driver.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://s3-ap-southeast-1.amazonaws.com/gettgo-web-production/home/jindatheme/gettgo_web_production/releases/20180306035135/public/ckeditor_assets/pictures/225/content_15160.png"
                    height="720"
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