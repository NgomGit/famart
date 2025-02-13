import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

// Import Custom Component
import ALink from "../../common/ALink";

export default function BlogTypeFour(props) {
    const { blog } = props;
    let date = new Date(blog.date);
    let monthArray = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    let day = date.getUTCDate() < 10 ? '0' + date.getUTCDate() : date.getUTCDate();
    let month = monthArray[date.getUTCMonth()];

    return (
        <article className="post post-list media-with-lazy">
            <figure className="post-media">
                {
                    blog.picture ?
                        <ALink href={`/pages/blog/${blog.slug}`}>
                            <div className="lazy-overlay"></div>

                            <LazyLoadImage
                                alt="post_image"
                                src={process.env.NEXT_PUBLIC_ASSET_URI + blog.picture[0].url}
                                threshold={500}
                                width="100%"
                                height="auto"
                                effect="blur"
                            />
                        </ALink>
                        : ""
                }
            </figure>
            <div className="post-body">
                <h2 className="post-title">
                    <ALink href={`/pages/blog/${blog.slug}`}>{blog.title}</ALink>
                </h2>

                <div className="post-date">
                    {day + "-" + month + "-" + "2020"}
                </div>

                <div className="post-content">
                    <p>{blog.content}</p>
                    <ALink href={`/pages/blog/${blog.slug}`} className="read-more">Read More<i className="fas fa-long-arrow-alt-right ml-1"></i></ALink>
                </div>
            </div>
        </article>
    )
}