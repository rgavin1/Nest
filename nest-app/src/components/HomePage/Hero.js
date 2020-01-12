import React from 'react';
import HeroImage from '../../assets/Hero/Farmhouse-479.png';

const Hero = () => {
    return (
        <div className="jumbotron-container">
            <div className="overlay"></div>
            <img src={HeroImage} alt="" />
            <div className="title">Title</div>
        </div>
    )
}

export default Hero;