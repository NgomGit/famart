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
                                <h4>Livraison</h4>
                                <p>Livraison partout dans le monde par DHL ou GP.</p>
                            </div>
                        </div>

                        <div className="info-box info-box-icon-left col-lg-4">
                            <i className="icon-money"></i>

                            <div className="info-box-content">
                                <h4>Satisfait ou Remboursé</h4>
                                <p>100% de votre argent remboursé</p>
                            </div>
                        </div>

                        <div className="info-box info-box-icon-left col-lg-4">
                            <i className="icon-support"></i>

                            <div className="info-box-content">
                                <h4>Support en ligne 24/7</h4>
                                <p>Vous pouvez contacter notre support à tout moment.</p>
                            </div>
                        </div>
                    </div>
                </Reveal>
            </div>
        </div>
    );
}

export default React.memo(FeatureBoxSection)