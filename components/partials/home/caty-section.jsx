import Reveal from 'react-awesome-reveal';

import ALink from '../../common/ALink';
import OwlCarousel from '../../features/owl-carousel';

import { fadeIn, fadeInUpShorter } from '../../../utils/data/keyframes'
import { categorySlider2 } from '../../../utils/data/slider';

export default function CategroySection () {
    return (
        <>
            <Reveal keyframes={ fadeIn } delay={ 100 } duration={ 1000 } triggerOnce>
                <h2 className="section-title text-center">Categories</h2>
            </Reveal>
            <Reveal keyframes={ fadeIn } delay={ 100 } duration={ 1000 } triggerOnce>
                <p className="section-description text-center">Nous proposons une large gamme de produits</p>
            </Reveal>
                <Reveal keyframes={ fadeIn } delay={ 100 } duration={ 1000 } triggerOnce>
                    <OwlCarousel adClass="owl-theme categories-slider content-center-bottom nav-outer" options={ categorySlider2 }>
                        <div className="product-category media-with-lazy">
                            <ALink href={ { pathname: '/shop', query: { category: 'bags' } } }>
                                <figure>
                                    <img
                                        alt="category"
                                        src="images/home/categories/category-1.jpg"
                                        width="100%"
                                        height="auto"
                                    />
                                </figure>
                                <div className="category-content">
                                    <h3>Sac</h3>
                                </div>
                            </ALink>
                        </div>
                        <div className="product-category media-with-lazy">
                            <ALink href={ { pathname: '/shop', query: { category: 'hats' } } }>
                                <figure>
                                    <img
                                        alt="category"
                                        src="images/home/categories/category-2.jpg"
                                        width="100%"
                                        height="auto"
                                    />
                                </figure>
                                <div className="category-content">
                                    <h3>Chapeau</h3>
                                </div>
                            </ALink>
                        </div>
                        <div className="product-category media-with-lazy">
                            <ALink href={ { pathname: '/shop', query: { category: 'clothes' } } }>
                                <figure>
                                    <img
                                        alt="category"
                                        src="images/home/categories/category-3.jpg"
                                        width="100%"
                                        height="auto"
                                    />
                                </figure>
                                <div className="category-content">
                                    <h3>Habillement</h3>
                                </div>
                            </ALink>
                        </div>
                        <div className="product-category media-with-lazy">
                            <ALink href={ { pathname: '/shop', query: { category: 'shoes' } } }>
                                <figure>
                                    <img
                                        alt="category"
                                        src="images/home/categories/category-5.jpg"
                                        width="100%"
                                        height="auto"
                                    />
                                </figure>
                                <div className="category-content">
                                    <h3>Chaussures</h3>
                                </div>
                            </ALink>
                        </div>
                        <div className="product-category media-with-lazy">
                            <ALink href={ { pathname: '/shop', query: { category: 'others' } } }>
                                <figure>
                                    <img
                                        alt="category"
                                        src="images/home/categories/category-4.jpg"
                                        width="100%"
                                        height="auto"
                                    />
                                </figure>
                                <div className="category-content">
                                    <h3>Divers</h3>
                                </div>
                            </ALink>
                        </div>
                    </OwlCarousel>
                </Reveal>
        </>
    )
}