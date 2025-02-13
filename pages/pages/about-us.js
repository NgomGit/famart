import React, { useEffect } from 'react';

import ALink from "../../components/common/ALink";
import { wordRotate } from "../../utils"

export default function AboutUs () {
    useEffect( () => {
        if ( document.querySelector( '.wort-rotator' ) )
            wordRotate();
    }, [] )

    return (
        <main className="main about">
            <div className="container">
                <nav aria-label="breadcrumb" className="breadcrumb-nav mb-4">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><ALink href="/">Home</ALink></li>
                        <li className="breadcrumb-item active" aria-current="page">About Us</li>
                    </ol>
                </nav>

                <div className="intro-section">
                    <h4>The New Way to&nbsp;
                        <span className="wort-rotator" data-plugin-options='{ "delay": 3000 }'>
                            <span className="wort-rotator-items">
                                <span>success.</span>
                                <span>progress.</span>
                                <span>advance.</span>
                            </span>
                        </span>
                    </h4>

                    <div className="row">
                        <div className="col-md-12 col-lg-10 col-12">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque rutrum pellentesque
                                imperdiet. Nulla lacinia iaculis nulla non <span className="alternative-font">metus</span> pulvinar.
                                Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus
                                mus. Ut eu risus enim, ut pulvinar lectus. Sed hendrerit nibh.</p>
                        </div>
                        <div className="col-md-12 col-lg-2 col-12">
                            <ALink className="btn btn-md btn-primary" href="#">Join Our
                                Team!</ALink>
                        </div>
                    </div>
                </div>

                <hr className="mt-4 mb-4" />

                <div className="section-2">
                    <div className="row">
                        <div className="col-md-12 col-lg-8">
                            <h4 className="about-section-title">Who We Are</h4>

                            <p className="mb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
                            pellentesque
                            neque eget
                                diam posuere porta. Quisque ut nulla at nunc <ALink href="#">vehicula</ALink> lacinia. Proin
                                adipiscing porta tellus, ut feugiat nibh adipiscing sit amet. In eu justo a felis
                                faucibus
                                ornare vel id metus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                                posuere cubilia Curae; In eu libero ligula. Fusce eget metus lorem, ac viverra leo.
                                Nullam
                                convallis, arcu vel pellentesque sodales, nisi est varius diam, ac ultrices sem ante
                                quis
                                sem. Proin ultricies volutpat sapien, nec scelerisque ligula mollis lobortis.</p>

                            <p>Curabitur pellentesque neque eget diam posuere porta. Quisque ut nulla at nunc vehicula
                                lacinia. Proin adipiscing porta tellus, ut feugiat nibh adipiscing <span
                                    className="alternative-font ls-10">metus</span> sit amet. In eu justo a felis faucibus
                                ornare
                                vel
                                id metus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere
                                cubilia
                                Curae; In eu libero ligula. Fusce eget metus lorem, ac viverra leo. Vestibulum ante
                                ipsum
                                primis in faucibus orci luctus et ultrices posuere cubilia Curae; In eu libero ligula.
                                Fusce
                                eget metus lorem, ac viverra leo. Vestibulum ante ipsum primis in faucibus orci luctus
                                et
                                ultrices posuere cubilia Curae; In eu libero ligula.</p>
                        </div>
                        <div className="col-md-12 col-lg-4">
                            <div className="featured-box">
                                <div className="box-content">
                                    <h5 className="text-primary">Behind the scenes</h5>
                                    <p className="text-primary">View stream on flickr</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <hr className="mt-4 mb-4" />

                <div className="history-section">
                    <h4 className="about-section-title">Our History</h4>

                    <div className="history">
                        <figure className="thumb d-none d-sm-block">
                            <img src="images/home/about/office-1.jpg" width="145" height="145"
                                alt="Office Img" />
                        </figure>
                        <div className="featured-box">
                            <div className="box-content">
                                <h4 className="heading-primary"><strong>2021</strong></h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pellentesque neque
                                eget diam posuere porta. Quisque ut nulla at nunc vehicula lacinia. Proin adipiscing
                                porta tellus, Curabitur pellentesque neque eget diam posuere porta. Quisque ut nulla
                                    at nunc vehicula lacinia. Proin adipiscing porta tellus,</p>
                            </div>
                        </div>
                    </div>

                    <div className="history">
                        <figure className="thumb d-none d-sm-block">
                            <img src="images/home/about/office-2.jpg" width="145" height="145"
                                alt="Office Img" />
                        </figure>
                        <div className="featured-box">
                            <div className="box-content">
                                <h4 className="heading-primary"><strong>2020</strong></h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pellentesque neque
                                eget diam posuere porta. Quisque ut nulla at nunc vehicula lacinia. Proin adipiscing
                                porta tellus, Curabitur pellentesque neque eget diam posuere porta. Quisque ut nulla
                                    at nunc vehicula lacinia.</p>
                            </div>
                        </div>
                    </div>

                    <div className="history">
                        <figure className="thumb d-none d-sm-block">
                            <img src="images/home/about/office-3.jpg" width="145" height="145"
                                alt="Office Img" />
                        </figure>
                        <div className="featured-box">
                            <div className="box-content">
                                <h4 className="heading-primary"><strong>2019</strong></h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pellentesque neque
                                eget diam posuere porta. Quisque ut nulla at nunc vehicula lacinia. Proin adipiscing
                                porta tellus, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
                                pellentesque neque eget diam posuere porta. Quisque ut nulla at nunc vehicula
                                lacinia. Proin adipiscing porta tellus, Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Curabitur pellentesque neque eget diam posuere porta. Quisque ut
                                    nulla at nunc vehicula lacinia. Proin adipiscing porta tellus,</p>
                            </div>
                        </div>
                    </div>

                    <div className="history">
                        <figure className="thumb d-none d-sm-block">
                            <img src="images/home/about/office-4.jpg" width="145" height="145"
                                alt="Office Img" />
                        </figure>
                        <div className="featured-box">
                            <div className="box-content">
                                <h4 className="heading-primary"><strong>2018</strong></h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pellentesque neque
                                eget diam posuere porta. Quisque ut nulla at nunc vehicula lacinia. Proin adipiscing
                                porta tellus, Curabitur pellentesque neque eget diam posuere porta. Quisque ut nulla
                                at nunc vehicula lacinia. Proin adipiscing porta tellus, Curabitur pellentesque
                                neque eget diam posuere porta. Quisque ut nulla at nunc vehicula lacinia. Proin
                                    adipiscing porta tellus,</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}