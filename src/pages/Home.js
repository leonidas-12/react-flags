import React from 'react';
import Navigation from '../components/Navigation';
import Logos from '../components/Logos';
import Countries from '../components/Countries';
const Home = () => {
    return (
        <div>
            <Logos/>
            <Navigation/>
            <Countries />
        </div>
    );
};

export default Home;