import Reveal from 'react-awesome-reveal';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import ALink from '../../common/ALink';

import { fadeIn } from '../../../utils/data/keyframes'

export default function BannerSection () {
    return (
        <div className="banners-container text-uppercase clear">
            <Reveal keyframes={ fadeIn } delay={ 100 } duration={ 1000 } triggerOnce>
                <div className="container">
                    <div className="row row-joined">
                        <div className="banner col-md-4">
                            <div className="banner-content text-left">
                                <h3 className="banner-title mb-0">Sunglasses</h3>
                                <p>16 Products</p>
                                <hr className="divider-short-thick" />

                                <ALink href="/shop" className="btn">Shop now <i className="fas fa-long-arrow-alt-right"></i></ALink>
                            </div>
                            <figure>
                                <LazyLoadImage
                                    alt="banner"
                                    src="images/home/banners/banner-1.jpg"
                                    width="100%"
                                    height="auto"
                                />
                            </figure>
                        </div>
                        <div className="banner col-md-4">
                            <div className="banner-content text-left">
                                <h3 className="banner-title m-b-1">Woman Shoes</h3>
                                <p>12 Products</p>
                                <hr className="divider-short-thick" />

                                <ALink href="/shop" className="btn">Shop now <i className="fas fa-long-arrow-alt-right"></i></ALink>
                            </div>
                            <figure>
                                <LazyLoadImage
                                    alt="banner"
                                    src="images/home/banners/banner-2.jpg"
                                    width="100%"
                                    height="auto"
                                />
                            </figure>
                        </div>
                        <div className="banner col-md-4">
                            <div className="banner-content text-left">
                                <h3 className="banner-title m-b-1">Woman Bags</h3>
                                <p>38 Products</p>
                                <hr className="divider-short-thick" />

                                <ALink href="/shop" className="btn">Shop now <i className="fas fa-long-arrow-alt-right"></i></ALink>
                            </div>
                            <figure>
                                <LazyLoadImage
                                    alt="banner"
                                    src="images/home/banners/banner-3.jpg"
                                    width="100%"
                                    height="auto"
                                />
                            </figure>
                        </div>
                    </div>
                </div>
            </Reveal>
        </div>
    )
}