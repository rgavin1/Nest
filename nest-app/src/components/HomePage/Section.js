import React from 'react';
import SectionOneImage from '../../assets/Hero/hero-home-479.png';
import SectionTwoImage from '../../assets/Hero/custom-home-479.png';
import SectionThreeImage from '../../assets/Hero/country-style-house-479.png';
import { Controller, Scene } from 'react-scrollmagic';

const Section = () => {
    return (
            <div className="section-container">
                <Controller>
                <Scene classToggle={['.section-content', 'fade-in-right']} triggerHook="onEnter" indicators={true} >
                <div className="sectionOne-content-container">
                    <div className="section-title">Find homes first</div>
                    <div className="section-content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra mauris in aliquam sem.
                    </div>
                    <div className="sectionOne-image-container">
                        <div className="section-overlay"></div>
                        <img src={SectionOneImage} alt="" />
                    </div>
                </div>
                </Scene>
                <Scene>
                <div className="sectionOne-content-container">
                    <div className="section-title">Tour faster</div>
                    <div className="section-content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra mauris in aliquam sem.
                    </div>
                    <div className="sectionOne-image-container">
                        <div className="section-overlay"></div>
                        <img src={SectionTwoImage} alt="" />
                    </div>
                </div>
                </Scene>
                <Scene>
                <div className="sectionOne-content-container">
                    <div className="section-title">Save thousands</div>
                    <div className="section-content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra mauris in aliquam sem.
                    </div>
                    <div className="sectionOne-image-container">
                        <div className="section-overlay"></div>
                        <img src={SectionThreeImage} alt="" />
                    </div>
                </div>
                </Scene>
                </Controller>
            </div>
           
        )
}

export default Section;
