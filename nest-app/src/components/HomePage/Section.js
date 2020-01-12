import React from 'react';
import SectionOneImage from '../../assets/Hero/hero-home-479.png';

const Section = () => {
    return (
            <div className="section-container">
                <div className="sectionOne-content-container">
                    <div className="section-title">Lorem ipsum</div>
                    <div className="section-content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra mauris in aliquam sem.
                    </div>
                    <div className="sectionOne-image-container">
                        <img src={SectionOneImage} alt="" />
                    </div>
                </div>
                <div className="sectionOne-content-container">
                    <div className="section-title">Lorem ipsum</div>
                    <div className="section-content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra mauris in aliquam sem.
                    </div>
                    <div className="sectionOne-image-container">
                        <img src={SectionOneImage} alt="" />
                    </div>
                </div>
                <div className="sectionOne-content-container">
                    <div className="section-title">Lorem ipsum</div>
                    <div className="section-content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra mauris in aliquam sem.
                    </div>
                    <div className="sectionOne-image-container">
                        <img src={SectionOneImage} alt="" />
                    </div>
                </div>
            </div>
        )
}

export default Section;
