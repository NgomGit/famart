import React from 'react';
import Reveal from 'react-awesome-reveal';

// Import Settigns
import { fadeIn } from '../../../utils/data/keyframes'

function FeatureBoxSection() {
    return (
        <div className="container mb-5">
            <div className="info-boxes-container">
                <Reveal keyframes={fadeIn} delay={100} duration={1000} triggerOnce>
                    <div className="row row-joined">
                        <div className="info-box info-box-icon-left col-lg-4">
                            <i className="icon-shipping"></i>

                            <div className="info-box-content">
                                <h4>FREE SHIPPING &amp; RETURN</h4>
                                <p>Free shipping on all orders over $99.</p>
                            </div>
                        </div>

                        <div className="info-box info-box-icon-left col-lg-4">
                            <i className="icon-money"></i>

                            <div className="info-box-content">
                                <h4>MONEY BACK GUARANTEE</h4>
                                <p>100% money back guarantee</p>
                            </div>
                        </div>

                        <div className="info-box info-box-icon-left col-lg-4">
                            <i className="icon-support"></i>

                            <div className="info-box-content">
                                <h4>ONLINE SUPPORT 24/7</h4>
                                <p>Lorem ipsum dolor sit amet.</p>
                            </div>
                        </div>
                    </div>
                </Reveal>
            </div>
        </div>
    );
}

export default React.memo(FeatureBoxSection)