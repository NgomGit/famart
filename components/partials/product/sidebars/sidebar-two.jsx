import React, { useEffect } from 'react';
import StickyBox from 'react-sticky-box';
import { useQuery } from '@apollo/react-hooks';
import { LazyLoadImage } from 'react-lazy-load-image-component';

// Import Aollo Server and Query
import withApollo from '../../../../server/apollo';
import { GET_SHOP_SIDEBAR_DATA } from '../../../../server/queries';

// Import Custom Component
import ProductThree from '../../../features/products/product-three';
import OwlCarousel from '../../../features/owl-carousel';

// Import Settings
import { widgetFeaturedProductSlider } from '../../../../utils/data/slider';

function ProductSidebarTwo(props) {
    const { adClass = "" } = props;
    const { data, loading, error } = useQuery(GET_SHOP_SIDEBAR_DATA, { variables: { demo: 4, featured: true } });

    useEffect(() => {
        return () => {
            closeSidebar();
        }
    }, [])

    function sidebarToggle(e) {
        let body = document.querySelector('body');

        e.preventDefault();
        if (body.classList.contains('sidebar-opened')) {
            body.classList.remove('sidebar-opened');
        } else {
            body.classList.add('sidebar-opened');
        }
    }

    function closeSidebar() {
        document.querySelector('body').classList.contains('sidebar-opened') && document.querySelector('body').classList.remove('sidebar-opened');
    }

    return (
        <>
            <div className="sidebar-overlay" onClick={closeSidebar}></div>
            <div className="sidebar-toggle custom-sidebar-toggle" onClick={e => sidebarToggle(e)}><i className="fas fa-sliders-h"></i></div>
            <aside className={`sidebar-product col-lg-3 mobile-sidebar ${adClass}`}>
                <StickyBox className="sticky-wrapper sticky-sidebar" offsetTop={70}>
                    {
                        loading ?
                            <div className="skel-widget"></div>
                            :
                            <div className="widget widget-info">
                                <ul>
                                    <li>
                                        <i className="icon-shipped"></i>
                                        <h4>FREE<br />SHIPPING</h4>
                                    </li>
                                    <li>
                                        <i className="icon-us-dollar"></i>
                                        <h4>100% MONEY<br />BACK GUARANTEE</h4>
                                    </li>
                                    <li>
                                        <i className="icon-online-support"></i>
                                        <h4>ONLINE<br />SUPPORT 24/7</h4>
                                    </li>
                                </ul>
                            </div>
                    }

                    {
                        loading ?
                            <div className="skel-widget"></div>
                            :
                            <div className="widget">
                                <div className="maga-sale-container custom-maga-sale-container">
                                    <figure className="mega-image">
                                        <LazyLoadImage
                                            alt="banner"
                                            src="images/banners/banner-sidebar.jpg"
                                            threshold={500}
                                            effect="blur"
                                            width={100}
                                            height={355}
                                        />
                                    </figure>

                                    <div className="mega-content">
                                        <div className="mega-price-box">
                                            <span className="price-big">50</span>
                                            <span className="price-desc"><em>%</em>OFF</span>
                                        </div>

                                        <div className="mega-desc">
                                            <h3 className="mega-title mb-0">MEGA SALE</h3>
                                            <span className="mega-subtitle">MANY ITEM</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    }

                    <div className="widget widget-featured">
                        <h3 className="widget-title">Featured</h3>

                        <div className="widget-body">
                            <OwlCarousel adClass="widget-featured-products" isTheme={false} options={widgetFeaturedProductSlider}>
                                <div className="featured-col">
                                    {
                                        loading ?
                                            [0, 1, 2].map((item, index) =>
                                                <div className="skel-product-col skel-pro mb-2" key={"product-one" + index}></div>
                                            )
                                            :
                                            data.shopSidebarData.featured.map((item, index) => (
                                                <ProductThree
                                                    product={item}
                                                    key={"product-three" + index}
                                                />
                                            ))
                                    }
                                </div>

                                <div className="featured-col">
                                    {data && data.shopSidebarData.featured.map((item, index) => (
                                        <ProductThree product={item} key={`featured-${index}`} />
                                    ))}
                                </div>
                            </OwlCarousel>
                        </div>
                    </div>
                </StickyBox>
            </aside>
        </>
    )
}

export default withApollo({ ssr: typeof window === 'undefined' })(ProductSidebarTwo);