import React, { useEffect } from 'react';
import Reveal from 'react-awesome-reveal';

// Import Custom Component
import ALink from '../../common/ALink';

// Import Utils
import { setParallax } from '../../../utils/index';
import { fadeInUpShorter } from '../../../utils/data/keyframes'

function PromoSection () {
    useEffect( () => {
        window.addEventListener( 'scroll', setParallax );

        return ( () => {
            window.removeEventListener( 'scroll', setParallax );
        } )
    }, [] )

    return (
        <div className="promo-section overflow-hidden parallax mb-5" style={ { backgroundImage: "url(images/home/banners/parallax_bg.jpg)" } }>
            <div className="promo-content">
                <Reveal keyframes={ fadeInUpShorter } delay={ 200 } duration={ 1000 } triggerOnce>
                    <h2 className="m-b-1">
                        New Season Sale</h2>
                </Reveal>
                <Reveal keyframes={ fadeInUpShorter } delay={ 400 } duration={ 1000 } triggerOnce>
                    <h3 className="mb-1">40% OFF</h3>
                </Reveal>
                <Reveal keyframes={ fadeInUpShorter } delay={ 600 } duration={ 1000 } triggerOnce>
                    <hr className="divider-short-thick" />
                </Reveal>
                <Reveal keyframes={ fadeInUpShorter } delay={ 800 } duration={ 1000 } triggerOnce>
                    <ALink href="/shop" className="btn btn-light">Shop Now <i className="fas fa-long-arrow-alt-right ml-2 pl-1"></i></ALink>
                </Reveal>
            </div>
        </div >
    );
}

export default React.memo( PromoSection );