import { withRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import SlideToggle from 'react-slide-toggle';

// Import Custom Component
import ALink from "../ALink";
import { mainMenu } from "../../../utils/data/menu";

function MobileMenu ( { router } ) {
    const pathname = router.pathname;
    const [ searchText, setSearchText ] = useState( '' );

    useEffect( () => {
        router.events.on( 'routeChangeStart', closeMobileMenu );

        return () => {
            router.events.off( 'routeChangeStart', closeMobileMenu );
        }
    }, [] );

    function isOtherPage () {
        return mainMenu.other.find( variation => variation.url === pathname );
    }

    function closeMobileMenu () {
        document.querySelector( "body" ).classList.remove( "mmenu-active" );

        if ( document.querySelector( ".menu-toggler" ) ) {
            document.querySelector( ".menu-toggler" ).classList.remove( "active" );
        }
    }

    function searchProducts ( e ) {
        e.preventDefault();
        router.push( {
            pathname: '/shop',
            query: {
                search: searchText
            }
        } );
    }

    function onChangeSearchText ( e ) {
        setSearchText( e.target.value );
    }

    return (
        <>
            <div className="mobile-menu-overlay" onClick={ closeMobileMenu }></div>
            <div className="mobile-menu-container">
                <div className="mobile-menu-wrapper">
                    <span className="mobile-menu-close" onClick={ closeMobileMenu }><i className="fa fa-times"></i></span>
                    <nav className="mobile-nav">
                        <ul className="mobile-menu">
                            <li className={ pathname === '/' ? 'active' : '' }>
                                <ALink href="/">Home</ALink>
                            </li>
                            <li className={ pathname.startsWith( '/shop' ) ? 'active' : '' }>
                                {
                                
                                    <ALink href="/shop" >Produits</ALink>
                                }
                            </li>

                            {/* <li className={ pathname.startsWith( '/product' ) ? 'active' : '' }>
                                {
                                    <SlideToggle collapsed={ true }>
                                        { ( { onToggle, setCollapsibleElement, toggleState } ) => (
                                            <>
                                                <ALink href="/product/default/porto-brown-bag" className={ `${ toggleState.toLowerCase() }` }>Products<span className="mmenu-btn" onClick={ e => { e.preventDefault(); onToggle(); } }></span></ALink>

                                                <ul ref={ setCollapsibleElement }>
                                                    <li>
                                                        <SlideToggle collapsed={ true }>
                                                            { ( { onToggle, setCollapsibleElement, toggleState } ) => (
                                                                <>
                                                                    <ALink href="#" className={ `${ toggleState.toLowerCase() }` }>PRODUCT PAGES
                                                                    <span className="mmenu-btn" onClick={ e => { e.preventDefault(); onToggle(); } }></span>
                                                                    </ALink>
                                                                    <ul ref={ setCollapsibleElement }>
                                                                        {
                                                                            mainMenu.product.pages.map( ( variations, index ) => (
                                                                                <li key={ "menu-item" + index }>
                                                                                    <ALink href={ `${ variations.url }` }>{ variations.title }</ALink>
                                                                                </li>
                                                                            ) )
                                                                        }
                                                                    </ul>
                                                                </>
                                                            ) }
                                                        </SlideToggle>
                                                    </li>

                                                    <li>
                                                        <SlideToggle collapsed={ true }>
                                                            { ( { onToggle, setCollapsibleElement, toggleState } ) => (
                                                                <>
                                                                    <ALink href="#" className={ `${ toggleState.toLowerCase() }` }>PRODUCT LAYOUTS
                                                                    <span className="mmenu-btn" onClick={ e => { e.preventDefault(); onToggle(); } }></span>
                                                                    </ALink>
                                                                    <ul ref={ setCollapsibleElement }>
                                                                        {
                                                                            mainMenu.product.layout.map( ( variations, index ) => (
                                                                                <li key={ "menu-item" + index }>
                                                                                    <ALink href={ `${ variations.url }` }>{ variations.title }</ALink>
                                                                                </li>
                                                                            ) )
                                                                        }
                                                                    </ul>
                                                                </>
                                                            ) }
                                                        </SlideToggle>
                                                    </li>
                                                </ul>
                                            </>
                                        ) }
                                    </SlideToggle>
                                }
                            </li> */}



                            {/* <li><ALink href="/pages/blog">Blog</ALink></li> */}
                            <li><ALink href="/pages/about-us">Apropos de nous</ALink></li>
                        </ul>

                        {/* <ul className="mobile-menu mt-2 mb-2">
                            <li className="border-0"><ALink href="#">Special Offer!</ALink></li>
                            <li className="border-0"><a href="https://1.envato.market/DdLk5" target="_blank">Buy Porto!<span className="tip tip-hot">Hot</span></a></li>
                        </ul> */}

                        <ul className="mobile-menu">
                            {/* <li><ALink href="/pages/account">Mon Compte</ALink></li> */}
                            <li><ALink href="/pages/contact-us">Contact Nous</ALink></li>
                            {/* <li><ALink href="/pages/blog">Blog</ALink></li> */}
                            <li><ALink href="/pages/wishlist">Mes favoris</ALink></li>
                            <li><ALink href="/pages/cart">Mon panier</ALink></li>
                            <li><ALink href="/pages/login" className="login-link">Se connecter</ALink></li>
                        </ul>
                    </nav>

                    <form className="search-wrapper mb-2" action="#" onSubmit={ searchProducts }>
                        <input type="text" className="form-control mb-0" placeholder="Search..." required onChange={ onChangeSearchText } />
                        <button className="btn icon-search text-white bg-transparent p-0" type="submit"></button>
                    </form>

                    <div className="social-icons">
                        <ALink href="#" className="social-icon social-facebook icon-facebook" >
                        </ALink>
                        <ALink href="#" className="social-icon social-twitter icon-twitter">
                        </ALink>
                        <ALink href="#" className="social-icon social-instagram icon-instagram">
                        </ALink>
                    </div>
                </div>
            </div>
        </>
    )
}

export default withRouter( MobileMenu );