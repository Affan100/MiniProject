import React from 'react';
import { Link } from 'react-router-dom';


const MainPage = () => {
    return (
        <div>
            <h1>Home Page</h1>
            <Link to="/404">Click Me</Link>
        </div>
    );
}
export default MainPage;