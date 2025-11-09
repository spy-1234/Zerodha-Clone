import React from 'react'
import Stats from './Stats';
import Hero from './Hero';
import Pricing from './Pricing';
import Awards from './Award';
import Education from './Education';
import OpenAccount from '../OpenAccount';
import Footer from '../Footer';
import NavBar from '../NavBar';

function HomePage() {
    return ( 
        <>
        <NavBar/>
        <Hero/>
        <Awards/>
        <Stats/>
        <Pricing/>
        <Education/>
        <OpenAccount/>
        <Footer />
        </>
     );
}

export default HomePage;