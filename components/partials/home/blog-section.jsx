import Reveal from 'react-awesome-reveal';

// Import Custom Component
import ALink from '../../common/ALink';
import BlogTypeFour from '../../features/blogs/blog-type-four';
import OwlCarousel from '../../features/owl-carousel';

// Import Utils
import { fadeInUpShorter } from '../../../utils/data/keyframes'
import { blogSlider2 } from '../../../utils/data/slider';

export default function BlogSection ( props ) {
    const { loading, blog } = props;

    return (
        <div className="blog-section">
            <div className="container text-center">
                <Reveal keyframes={ fadeInUpShorter } delay={ 200 } duration={ 1000 } triggerOnce>
                    <h2 className="section-title text-center">FROM THE BLOG</h2>
                </Reveal>
                <Reveal keyframes={ fadeInUpShorter } delay={ 200 } duration={ 1000 } triggerOnce>
                    <p className="section-description text-center mb-3 mb-lg-5">Only the latest news from us, stay tuned.</p>
                </Reveal>
                <OwlCarousel adClass="owl-theme mb-4 pb-2 text-left" options={ blogSlider2 }>
                    {
                        loading ?
                            [ 0, 1, 2, 3, 4 ].map( ( item, index ) =>
                                <div className="skel-pro skel-pro-grid" key={ "product-four" + index }></div>
                            )
                            :
                            blog.slice( 0, 3 ).map( ( item, index ) => (
                                <BlogTypeFour blog={ item } key={ "product-four" + index } />
                            ) )
                    }
                </OwlCarousel>
                <Reveal keyframes={ fadeInUpShorter } delay={ 700 } duration={ 1000 } triggerOnce>
                    <ALink href="/pages/blog" className="btn btn-dark btn-lg">Our Blog</ALink>
                </Reveal>
            </div>
        </div>
    );
}