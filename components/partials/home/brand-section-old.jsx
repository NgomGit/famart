import React from 'react';
import Reveal from 'react-awesome-reveal';
import { LazyLoadImage } from 'react-lazy-load-image-component';

// Import Cusom Component
import OwlCarousel from '../../features/owl-carousel';

// Import Settigns
import { brandSlider } from '../../../utils/data/slider';
import { fadeIn } from '../../../utils/data/keyframes'

function BrandSectionOld() {
    return (
        <div className="brands-section">
            <div className="container">
                <Reveal keyframes={fadeIn} delay={400} duration={1000} triggerOnce>
                    <OwlCarousel adClass="brands-slider owl-theme images-center" options={brandSlider}>
                        <figure>
                            <LazyLoadImage
                                alt="brand"
                                src="images/brands/small/brand1.png"
                                width="100%"
                                height={56}
                                threshold={500}
                                effect="black and white"
                            />
                        </figure>
                        <figure>
                            <LazyLoadImage
                                alt="brand"
                                src="images/brands/small/brand2.png"
                                width="100%"
                                height={56}
                                threshold={500}
                                effect="black and white"
                            />
                        </figure>
                        <figure>
                            <LazyLoadImage
                                alt="brand"
                                src="images/brands/small/brand3.png"
                                width="100%"
                                height={56}
                                threshold={500}
                                effect="black and white"
                            />
                        </figure>
                        <figure>
                            <LazyLoadImage
                                alt="brand"
                                src="images/brands/small/brand4.png"
                                width="100%"
                                height={56}
                                threshold={500}
                                effect="black and white"
                            />
                        </figure>
                        <figure>
                            <LazyLoadImage
                                alt="brand"
                                src="images/brands/small/brand5.png"
                                width="100%"
                                height={56}
                                threshold={500}
                                effect="black and white"
                            />
                        </figure>
                        <figure>
                            <LazyLoadImage
                                alt="brand"
                                src="images/brands/small/brand6.png"
                                width="100%"
                                height={56}
                                threshold={500}
                                effect="black and white"
                            />
                        </figure>
                    </OwlCarousel >
                </Reveal>
            </div>
        </div>
    );
}

export default React.memo(BrandSectionOld);