import { useEffect } from 'react';

import ALink from '../../common/ALink';

import { setParallax } from '../../../utils/index';

export default function ShopBanner(props) {
    useEffect(() => {
        window.addEventListener('scroll', setParallax);

        return (() => {
            window.removeEventListener('scroll', setParallax);
        })
    }, [])

    const { hasgap } = props;

    return (
        <div className={`category-banner parallax ${hasgap ? 'mb-2 mt-0' : ''}`}
            style={{ backgroundImage: 'url(images/home/banners/parallax_bg.png)' }}>
            <div className="promo-content d-sm-flex align-items-center justify-content-center">
                <div>
                    <h2 className="m-b-1">Chez Fama arts, c'est jusqu'à plus de</h2>
                    <h3 className="mb-0">30% de réduction</h3>
                </div>
                <hr className="divider-short-thick" />
                <ALink href="/shop" className="btn btn-light">Commander maintenant <i
                    className="fas fa-long-arrow-alt-right ml-2 pl-1"></i></ALink>
            </div>
        </div>
    )
}