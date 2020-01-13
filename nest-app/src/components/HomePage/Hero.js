import React from 'react';
import HeroImage from '../../assets/Hero/Farmhouse-479.png';

const Hero = () => {
    return (
        <div className="jumbotron-container">
            <div className="overlay"></div>
            <img src={HeroImage} alt="" />
            <div className="hero-brand-container">
                <div className="hero-brand-logo">N</div>
                <div className="nest-brand">NEST</div>
            </div>
        </div>
    )
}

export default Hero;