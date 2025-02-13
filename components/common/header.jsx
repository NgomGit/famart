import { useRouter } from 'next/router';

// Import Custom Component
import ALink from "./ALink";
import CartMenu from "./partials/cart-menu";
import MainMenu from "./partials/main-menu";
import SearchForm from "./partials/search-form";

export default function Header ( { adClass = '' } ) {
    const router = useRouter().pathname;

    function openMobileMenu ( e ) {
        e.preventDefault();
        document.querySelector( "body" ).classList.toggle( "mmenu-active" );
        e.currentTarget.classList.toggle( "active" );
    }

    return (
        <header className={ `header ${ adClass }` }>
            <div className="header-top bg-dark text-white">
                <div className="container justify-content-center">
                    <div className="header-left">
                        <h5 className="top-notice mb-0 pl-0">Get 10% OFF at the Porto Fashion Selection - <ALink
                            href="/shop">Shop Now!</ALink></h5>
                    </div>
                    <div className="header-right d-none d-sm-flex">
                        <MainMenu />

                        <div className="header-dropdowns text-upper">
                            <div className="header-dropdown pl-2">
                                <ALink href="#">USD</ALink>
                                <div className="header-menu">
                                    <ul>
                                        <li><ALink href="#">EUR</ALink></li>
                                        <li><ALink href="#">USD</ALink></li>
                                    </ul>
                                </div>
                            </div>

                            <div className="header-dropdown pl-2">
                                <ALink href="#"><i className="flag-us flag"></i>ENG</ALink>
                                <div className="header-menu">
                                    <ul>
                                        <li><ALink href="#"><i className="flag-us flag mr-2"></i>ENG</ALink>
                                        </li>
                                        <li><ALink href="#"><i className="flag-fr flag mr-2"></i>FRA</ALink></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={ router === '/' ? 'header-transparent' : '' }>
                <div className="header-middle sticky-header">
                    <div className="container">
                        <div className="header-left">
                            <button className="mobile-menu-toggler" type="button" onClick={ openMobileMenu }>
                                <i className="fas fa-bars"></i>
                            </button>

                            <ALink href="/" className="logo">
                                <img src="images/logo-white.png" alt="Porto Logo" />
                            </ALink>
                        </div>

                        <div className="header-right">
                            <SearchForm />

                            <ALink href="/pages/login" className="header-icon header-icon-user"><i className="icon-user-2"></i></ALink>

                            <ALink href="/pages/wishlist" className="header-icon"><i className="icon-wishlist-2"></i></ALink>

                            <CartMenu />
                        </div>
                    </div>
                </div>
            </div>
        </header >
    )
}