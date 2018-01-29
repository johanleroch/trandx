import React from 'react';
import { Button } from '../buttons';
import { Badge } from '../badges';

import appSingle from '../../images/mobiles/app-single.png';
import appSingle2 from '../../images/mobiles/app-single-2.png';
import oval from '../../images/shapes/oval.svg';
import dottedCircle from '../../images/shapes/dotted-circle.svg';


const Section2 = () => (
    <div className="bg2">
        <div id="oval-container" className="image-block">
            <img className="img-fluid" src={oval} alt="decorative shape"/>
        </div>
        <div className="container">
            <div className="row flex-row-reverse">
                <div className="col-lg-6 d-flex flex-column justify-content-center text-center text-lg-left">
                    <Badge className="align-self-center align-self-lg-start" iconClassName="tf-strategy" />
                    <span className="title">Take your docs anywhere</span>
                    <p className="description">Save files on your computer, then access them on your phone from the road. Everything you keep in Dropbox is synced automatically to all your devices.</p>
                    <Button className="align-self-center align-self-lg-start">Buy now</Button>
                </div>
                <div className="col-lg-6 d-flex justify-content-lg-start justify-content-center iphone-container">
                    <img id="app1" className="img-fluid" src={appSingle} alt="app" />
                    <img className="dotted-circle rotating" src={dottedCircle} alt="dotted circle shape" />
                </div>
            </div>
            <div className="row flex-row">
                <div className="col-lg-6 d-flex flex-column justify-content-center text-center text-lg-left">
                    <Badge className="align-self-center align-self-lg-start" iconClassName="tf-strategy" />
                    <span className="title">Work on slides together</span>
                    <p className="description">Save files on your computer, then access them on your phone from the road. Everything you keep in Dropbox is synced automatically to all your devices.</p>
                    <Button className="align-self-center align-self-lg-start">Buy now</Button>
                </div>
                <div className="col-lg-6 d-flex justify-content-lg-start justify-content-center app-container">
                    <img id="app2" className="img-fluid" src={appSingle2} alt="app2" />
                    <img className="app1 img-fluid" src={appSingle} alt="app1" />
                </div>
            </div>
        </div>
    </div>
);

export { Section2 };