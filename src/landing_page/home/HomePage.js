import React from 'react'
import Stats from './Stats';
import Hero from './Hero';
import Pricing from './Pricing';
import Awards from './Award';
import Education from './Education';
import OpenAccount from '../OpenAccount';

function HomePage() {
    return ( 
        <>
        <Hero/>
        <Awards/>
        <Stats/>
        <Pricing/>
        <Education/>
        <OpenAccount/>
        </>
     );
}

export default HomePage;