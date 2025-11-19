import React from 'react';
import BnnaerImage from '../assets/banner.jpg';
import { useState } from 'react';
import Footer from './Footer';
// import Button from './Button';

function Hero() {
    const [fruit, setFruite]=useState("Apple");
    const count=()=>{
        setFruite("banna")
    } 
       return (
        <div>
            <h1>{fruit}</h1>

            <button onClick={count}>click here</button>
            <Footer />
        </div>
    )
}

export default Hero;