import { useQuery } from "@apollo/react-hooks";

// Import Apollo Server and Query
import withApollo from '../server/apollo';
import { GET_HOME_DATA } from '../server/queries';

// Import Custom Component
import NewsletterModal from "../components/features/modals/newsletter-modal";
import LoadMoreProducts from "../components/partials/home/load-more-product";
import TopRatedCollection from "../components/partials/home/top-product-collection";
import IntroSection from "../components/partials/home/intro-section";
import CategroySection from "../components/partials/home/caty-section";
import BannerSection from "../components/partials/home/banner-section";
import FeatureBoxSection from "../components/partials/home/featurebox-section";
import PromoSection from "../components/partials/home/promo-section";
import ProductWidgetContainer from "../components/partials/home/product-widget-container";
import BlogSection from '../components/partials/home/blog-section';
// import BrandSection from '../components/partials/home/brand-section';

function Home () {
    const { data, loading, error } = useQuery( GET_HOME_DATA, { variables: { productsCount: 4, postsCount: 2 } } );
    const products = data && data.products.data;
    const featured = data && data.specialProducts.featured;
    const bestSelling = data && data.specialProducts.bestSelling;
    const latest = data && data.specialProducts.latest;
    const topRated = data && data.specialProducts.topRated;
    const total = data && data.products.total;
    const blog = data && data.posts.data;

    if ( error ) {
        return <div>{ error.message }</div>
    }

    return (
        <>
            <main className={ `home skeleton-body skel-shop-products ${ loading ? '' : 'loaded' }` }>

                <IntroSection />

                <BannerSection />

                <FeatureBoxSection />

                <div className="container mb-4 mb-lg-6">
                    <LoadMoreProducts product={ products } perPage={ 4 } total={ total } />

                    <hr className="mb-4 pb-1" />

                    <CategroySection />

                </div>

                <PromoSection />

                <div className="container mb-2 mb-lg-4">
                    <TopRatedCollection product={ topRated } loading={ loading } />

                    <hr className="mt-1 m-b-5" />

                    <ProductWidgetContainer featured={ featured } latest={ latest } bestSelling={ bestSelling } topRated={ topRated } loading={ loading } />
                </div>

                <BlogSection blog={ blog } loading={ loading } />

                {/* <BrandSection /> */}

            </main>

            <NewsletterModal />

        </>
    )
}

export default withApollo( { ssr: typeof window === 'undefined' } )( Home );