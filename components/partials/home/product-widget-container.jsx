import React from 'react';
import { useQuery } from '@apollo/react-hooks';

// Import Apollo Server and Query
import withApollo from '../../../server/apollo';
import { GET_SPECIAL_PRODUCTS } from '../../../server/queries';

// Import Custom Component
import ProductThree from '../../features/products/product-three';

function ProductWidgetContainer ( props ) {
    const { adClass = "" } = props;
<<<<<<< HEAD
    // const { data, loading, error } = useQuery( GET_SPECIAL_PRODUCTS, { variables: { featured: true, bestSelling: true, latest: true, topRated: true, count: 3 } } );
    // const featured = data && data.specialProducts.featured;
    // const bestSelling = data && data.specialProducts.bestSelling;
    // const latest = data && data.specialProducts.latest;

    // const topRated = data && data.specialProducts.topRated;
    const {featured, bestSelling, latest, error, loading} = props
    const topRated= [] 
=======
    const { data, loading, error } = useQuery( GET_SPECIAL_PRODUCTS, { variables: { featured: true, bestSelling: true, latest: true, topRated: true, count: 3 } } );
    const featured = data && data.specialProducts.featured;
    const bestSelling = data && data.specialProducts.bestSelling;
    const latest = data && data.specialProducts.latest;
    const topRated = data && data.specialProducts.topRated;
>>>>>>> 8f2655e415c8c4a73dc793034924a8a4d368e5f4

    if ( error ) {
        return <div>{ error.message }</div>
    }

    return (
        <section className={ `product-widgets-container pb-2 skeleton-body skel-shop-products ${ loading ? '' : 'loaded' } ${ adClass }` }>
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-sm-6 pb-5 pb-lg-0">
                        {
                            loading ?
                                [ 0, 1, 2 ].map( ( item, index ) =>
                                    <div className="skel-product-col skel-pro mb-2" key={ "ProductThree" + index }></div>
                                )
                                :

                                <>
<<<<<<< HEAD
                                    <h4 className="section-sub-title">Produits Spécials</h4>
=======
                                    <h4 className="section-sub-title">Featured Products</h4>
>>>>>>> 8f2655e415c8c4a73dc793034924a8a4d368e5f4
                                    {
                                        featured.slice( 0, 3 ).map( ( product, index ) => (
                                            <ProductThree product={ product } key={ `ProductThree`, index } />
                                        ) )
                                    }
                                </>

                        }
                    </div>

                    <div className="col-lg-4 col-sm-6 pb-5 pb-lg-0">
                        {
                            loading ?
                                [ 0, 1, 2 ].map( ( item, index ) =>
                                    <div className="skel-product-col skel-pro mb-2" key={ "ProductThree" + index }></div>
                                )
                                :

                                <>
<<<<<<< HEAD
                                    <h4 className="section-sub-title">Meilleurs ventes</h4>
=======
                                    <h4 className="section-sub-title">Best Selling Products</h4>
>>>>>>> 8f2655e415c8c4a73dc793034924a8a4d368e5f4
                                    {
                                        bestSelling.slice( 0, 3 ).map( ( product, index ) => (
                                            <ProductThree product={ product } key={ `ProductThree`, index } />
                                        ) )
                                    }
                                </>

                        }
                    </div>

                    <div className="col-lg-4 col-sm-6 pb-5 pb-sm-0">
                        {
                            loading ?
                                [ 0, 1, 2 ].map( ( item, index ) =>
                                    <div className="skel-product-col skel-pro mb-2" key={ "ProductThree" + index }></div>
                                )
                                :

                                <>
<<<<<<< HEAD
                                    <h4 className="section-sub-title">Nos Produits Récents</h4>
=======
                                    <h4 className="section-sub-title">Latest Products</h4>
>>>>>>> 8f2655e415c8c4a73dc793034924a8a4d368e5f4

                                    {
                                        latest.slice( 0, 3 ).map( ( product, index ) => (
                                            <ProductThree product={ product } key={ `ProductThree`, index } />
                                        ) )
                                    }
                                </>
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default withApollo( { ssr: typeof window === 'undefined' } )( ProductWidgetContainer );