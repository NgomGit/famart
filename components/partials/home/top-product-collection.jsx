import Reveal from 'react-awesome-reveal';

// Import Custom Component
import ProductOne from '../../features/products/product-one';
import OwlCarousel from '../../features/owl-carousel';
import { productSlider } from '../../../utils/data/slider';

import { fadeIn } from '../../../utils/data/keyframes'

export default function TopRatedCollection(props) {
    const { product, loading } = props;

    return (
        <>
            <Reveal keyframes={fadeIn} delay={200} duration={1000} triggerOnce>
                <>
                    <h2 className="section-title text-center">Top Rated Products</h2>
                    <p className="section-description text-center">Only the top rated products added recently in our catalog</p>
                    <OwlCarousel adClass="owl-theme pb-2 mb-2" options={productSlider}>
                        {
                            loading ?
                                [0, 1, 2, 3, 4].map((item, index) =>
                                    <div className="skel-pro skel-pro-grid" key={"prod-default-list" + index}></div>
                                )
                                :
                                product.map((item, index) => (
                                    <ProductOne product={item} key={"top-product" + index} />
                                ))
                        }
                    </OwlCarousel>
                </>
            </Reveal>
        </>
    );
}