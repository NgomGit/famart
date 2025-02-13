import Reveal from 'react-awesome-reveal';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import ALink from '../../common/ALink';
import OwlCarousel from '../../features/owl-carousel';

import { fadeInUpShorter } from '../../../utils/data/keyframes'

export default function IntroSection() {
    return (
        <div className="home-slider-container clearfix">
            <OwlCarousel adClass="home-slider owl-theme show-nav-hover" options={{
                nav: true,
                dots: false,
                loop: false,
                navText: ['<i class="icon-left-open-big">', '<i class="icon-right-open-big">']
            }}>
                <div className="home-slide home-slide1 d-flex align-items-center banner" style={{ backgroundImage: 'url(images/home/slider/slide-1.jpg)' }}>
                    <div className="container">
                        <div className="banner-layer banner-layer-right float-right">
                            <Reveal keyframes={fadeInUpShorter} delay={200} duration={1000}>
                                <>
                                    <h2>New Season Dresses</h2>
                                    <h3 className="text-uppercase rotated-upto-text mb-0"><small>Up to</small>50% off</h3>

                                    <hr className="divider-short-thick" />

                                    <h5 className="text-uppercase d-inline-block mb-0 ls-n-20">Starting at <span>$<em>39</em>99</span></h5>
                                    <ALink href="/shop" className="btn btn-light btn-xl btn-icon-right"
                                        role="button">Shop Now <i className="fas fa-long-arrow-alt-right"></i></ALink>
                                </>
                            </Reveal>
                        </div>
                    </div>
                </div>
                <div className="home-slide home-slide2 banner d-flex align-items-center banner" style={{ backgroundImage: 'url(images/home/slider/slide-2.jpg)' }}>
                    <div className="container">
                        <div className="banner-layer banner-layer-left float-left">
                            <Reveal keyframes={fadeInUpShorter} delay={200} duration={1000}>
                                <>
                                    <h2>New Season Hats</h2>
                                    <h3 className="text-uppercase rotated-upto-text mb-0"><small>Up to</small>20% off</h3>

                                    <hr className="divider-short-thick" />

                                    <h5 className="text-uppercase d-inline-block mb-0 ls-n-20">Starting at <span>$<em>19</em>99</span></h5>
                                    <ALink href="/shop" className="btn btn-light btn-xl btn-icon-right"
                                        role="button">Shop Now <i className="fas fa-long-arrow-alt-right"></i></ALink>
                                </>
                            </Reveal>
                        </div>
                    </div>
                </div>
            </OwlCarousel>
        </div >
    )
}