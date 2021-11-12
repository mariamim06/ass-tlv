import React from 'react';
import Banner from '../Banner/Banner';
import Packages from '../Packages/Packages';
import Reviews from '../Reviews/Reviews';
import Blogs from '../Blogs/Blogs';
import './Home.css';

const Home = () => {
    return (
        <div id="home" className="home">
            <Banner></Banner>
            <Packages></Packages>
            <Reviews></Reviews>
            <Blogs></Blogs>
        </div>
    );
};

export default Home;