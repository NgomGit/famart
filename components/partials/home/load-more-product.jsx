import { useState, useEffect } from 'react';
import Reveal from 'react-awesome-reveal';
import { useLazyQuery } from '@apollo/react-hooks';

// Import Custom Component
import ProductOne from '../../features/products/product-one';

import { GET_PRODUCTS } from '../../../server/queries';
import { fadeInUpShorter } from '../../../utils/data/keyframes'

export default function LoadMoreProduct(props) {
    const { product = [], loading, perPage, total } = props;
    const [loadmore, { data, loading: ajaxLoading }] = useLazyQuery(GET_PRODUCTS);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        setProducts(product);
    }, [product])

    useEffect(() => {
        if (data) {
            setProducts([...products, ...data.products.data]);
        }
    }, [data])

    function onLoadMoreProducts(e) {
        loadmore({
            variables: {
                from: products.length,
                to: products.length + 4
            }
        })
    }

    return (
        <>
            <Reveal keyframes={fadeInUpShorter} delay={200} duration={1000} triggerOnce>
                <h2 className="section-title text-center">Featured Products</h2>
            </Reveal>
            <Reveal keyframes={fadeInUpShorter} delay={200} duration={1000} triggerOnce>
                <p className="section-description text-center">Amazing products added recently in our catalog</p>
            </Reveal>
            <Reveal keyframes={fadeInUpShorter} delay={400} duration={1000} triggerOnce>
                <>
                    <div className="row product-ajax-grid">
                        {
                            loading ?
                                new Array(parseInt(perPage)).fill(1).map((item, index) =>
                                    <div className={gridClass} key={`skel-pro-${index}`}>
                                        <div className="skel-pro skel-pro-grid"></div>
                                    </div>
                                )
                                :
                                products && products.map((item, index) => (
                                    <div className="col-sm-3 col-6" key={"product-one" + index}>
                                        <ProductOne product={item} />
                                    </div>

                                ))
                        }
                    </div>
                    {
                        total && products.length < total ?
                            <button className="btn btn-dark btn-lg btn-center loadmore" onClick={onLoadMoreProducts}>{ajaxLoading ? "Loading..." : "Load more..."}</button>
                            :
                            ''
                    }
                </>
            </Reveal>
        </>
    );
}