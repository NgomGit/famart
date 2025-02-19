import React from 'react';
import { connect } from 'react-redux';
import { LazyLoadImage } from 'react-lazy-load-image-component';

// Import Custom Component
import ALink from '../../common/ALink';
import CountDown from '../countdown';

function ProductFour ( props ) {
    const { adClass = "", link = "default", product } = props;

    function isSale () {
        return product.price[ 0 ] !== product.price[ 1 ] && product.variants.length === 0 ?
            '-' + ( 100 * ( product.price[ 1 ] - product.price[ 0 ] ) / product.price[ 1 ] ).toFixed( 0 ) + '%'
            :
            product.variants.find( variant => variant.sale_price ) ? "Sale" : false;
    }

    return (
        <div className={ `product-default pl-3 pr-3 media-with-lazy ${ adClass }` }>
            <figure>
                <ALink href={ `/product/${ link }/${ product.slug }` }>
                    <LazyLoadImage
                        alt="product"
                        src={ process.env.NEXT_PUBLIC_ASSET_URI + product.pictures[ 0 ].url }
                        threshold={ 500 }
                        effect="black and white"
                        width="100%"
                        height="auto"
                    />
                    {
                        product.pictures.length >= 2 ?
                            <LazyLoadImage
                                alt="product"
                                src={ process.env.NEXT_PUBLIC_ASSET_URI + product.pictures[ 1 ].url }
                                threshold={ 500 }
                                effect="black and white"
                                wrapperClassName="product-image-hover"
                            />
                            : ""
                    }
                </ALink>

                <div className="label-group">
                    { product.is_hot ? <div className="product-label label-hot">HOT</div> : '' }

                    { isSale() ? <div className="product-label label-sale">{ isSale() }</div> : '' }
                </div>

                {
                    product.until && product.until !== null &&
                    <CountDown product={ product } />
                }
            </figure>

            <div className="product-details">
                <div className="category-list">
                    <ALink href={ `/product/default/${ product.slug }` }>{ product.name }</ALink>
                </div>

                <h3 className="product-title">
                    <ALink href={ `/product/default/${ product.slug }` }>{ product.name }</ALink>
                </h3>

                <div className="ratings-container">
                    <div className="product-ratings">
                        <span className="ratings" style={ { width: 20 * product.ratings + '%' } }></span>
                        <span className="tooltiptext tooltip-top">{ product.ratings.toFixed( 2 ) }</span>
                    </div>
                </div>

                <div className="price-box">
                    {
                        product.price[ 0 ] == product.price[ 1 ] ?
                            <span className="product-price">{ '$' + product.price[ 0 ].toFixed( 2 ) }</span>
                            : product.variants.length > 0 ?
                                <span className="product-price">{ '$' + product.price[ 0 ].toFixed( 2 ) } &ndash; { '$' + product.price[ 1 ].toFixed( 2 ) }</span>
                                : <>
                                    <span className="old-price">{ '$' + product.price[ 1 ].toFixed( 2 ) }</span>
                                    <span className="product-price">{ '$' + product.price[ 0 ].toFixed( 2 ) }</span>
                                </>
                    }
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = ( state ) => {
    return {
        wishlist: state.wishlist.list ? state.wishlist.list : []
    }
}

export default connect( mapStateToProps, {} )( React.memo( ProductFour ) );