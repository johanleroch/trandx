import React from 'react';
import { Button } from '../buttons';

import mobileHome1x from '../../images/mobiles/mobile_home_1x.png';
import oval from '../../images/shapes/oval.svg';
import waves1 from '../../images/shapes/waves_1.svg';
import waves2 from '../../images/shapes/waves_2.svg';
import waves3 from '../../images/shapes/waves_3.svg';


const Section1 = () => (
    <div className="bg1">
        <div id="oval-container" className="image-block">
            <img className="img-fluid" src={oval} alt="decorative shape"/>
        </div>
        <div className="container">
            <div className="row">
                <div className="col-lg-6 d-flex flex-column justify-content-start justify-content-lg-center text-center text-lg-left">
                    <h1>A life in Design</h1>
                    <p>You can have an art experience in front of a Rembrandt, or in front of a piece of graphic design.</p>
                    <Button className="align-self-center align-self-lg-start get-started-now-btn" theme="dark">Get started now</Button>
                </div>
                <div className="col-lg-6 d-flex justify-content-lg-end justify-content-center iphone-container">
                    <img className="img-fluid iphone-1 floatingY" src={mobileHome1x} alt="iphone-banner" />        
                </div>
            </div>
        </div>

        <div className="waves-container">
            <img className="waves waves-1 floatingY-2 floatingX" src={waves1} alt="waves" />                      
            <img className="waves waves-2 floatingY floatingX-2" src={waves2} alt="waves" />                      
            <img className="waves waves-3 floatingY-3 floatingX-3" src={waves3} alt="waves" />                      
        </div>
    </div>
);

export { Section1 };