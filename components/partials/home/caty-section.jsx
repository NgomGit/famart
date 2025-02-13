import Reveal from 'react-awesome-reveal';

import ALink from '../../common/ALink';
import OwlCarousel from '../../features/owl-carousel';

import { fadeIn, fadeInUpShorter } from '../../../utils/data/keyframes'
import { categorySlider2 } from '../../../utils/data/slider';

export default function CategroySection () {
    return (
        <>
            <Reveal keyframes={ fadeIn } delay={ 100 } duration={ 1000 } triggerOnce>
                <h2 className="section-title text-center">Browse Categories</h2>
            </Reveal>
            <Reveal keyframes={ fadeIn } delay={ 100 } duration={ 1000 } triggerOnce>
                <p className="section-description text-center">Amazing categories with only top fashion products</p>
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
                                <h3>Bags</h3>
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
                                <h3>Hats</h3>
                            </div>
                        </ALink>
                    </div>
                    <div className="product-category media-with-lazy">
                        <ALink href={ { pathname: '/shop', query: { category: 'jackets' } } }>
                            <figure>
                                <img
                                    alt="category"
                                    src="images/home/categories/category-3.jpg"
                                    width="100%"
                                    height="auto"
                                />
                            </figure>
                            <div className="category-content">
                                <h3>Jackets</h3>
                            </div>
                        </ALink>
                    </div>
                    <div className="product-category media-with-lazy">
                        <ALink href={ { pathname: '/shop', query: { category: 'sunglasses' } } }>
                            <figure>
                                <img
                                    alt="category"
                                    src="images/home/categories/category-4.jpg"
                                    width="100%"
                                    height="auto"
                                />
                            </figure>
                            <div className="category-content">
                                <h3>Sunglasses</h3>
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
                                <h3>Shoes</h3>
                            </div>
                        </ALink>
                    </div>
                </OwlCarousel>
            </Reveal>
        </>
    )
}