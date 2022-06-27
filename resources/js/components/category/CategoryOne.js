import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import { Helmet } from "react-helmet";

const CategoryOne = ({ data }) => {
    return (
        <>
            <div className={`row "g-5 mt--25"}`}>
                {data?.map((data, i) => (
                    <ScrollAnimation
                        animateIn="fadeInUp"
                        animateOut="fadeInOut"
                        className={`col-lg-3 col-md-6 col-sm-6 col-12`}
                        animateOnce={true}
                        key={i}
                    >
                        <div className="service-card service-card-1 radius-small h-100">
                            <div className="inner">
                                <div className="thumbnail" style={{height:'auto'}}>
                                    <a
                                     href={data?.pdf_link[0]}
                                     target='_blank'
                                     >
                                        <img
                                            src={data?.image}
                                            alt="Category Thumb"
                                            style={{height:'100%', width:'100%', objectFit:'fill'}}
                                        />
                                    </a>
                                </div>
                                <div className="content" style={{height: "300px"}}>
                                    <div style={{
                                            height: "100%",
                                            display: "flex",
                                            flexDirection: "column",
                                            justifyContent:"space-between"}}>
                                    <div>
                                    <span className="course-total">
                                        {new Date(data?.date).toLocaleDateString()}
                                    </span>
                                    </div>

                                    <div>
                                    <h6 className="title">
                                        <a
                                        href={data?.pdf_link[0]}
                                        target='_blank'>{data?.title}</a>
                                    </h6>
                                    </div>

                                    <div className="text-center ">
                                            <div className="">
                                                <ScrollAnimation
                                                    animateIn="fadeInUp"
                                                    animateOut="fadeInOut"
                                                    className="load-more-btn"
                                                    animateOnce={true}
                                                >
                                                    <a
                                                        className="edu-btn"
                                                        href={data?.pdf_link[0]}
                                                        target='_blank'
                                                    >
                                                        Devamını Oku{" "}
                                                        <i className="icon-arrow-right-line-right"></i>
                                                    </a>
                                                </ScrollAnimation>
                                            </div>
                                        </div>
                                    </div>




                                </div>
                            </div>
                        </div>
                    </ScrollAnimation>
                ))}
                <div className="col-lg-6 text-center" style={{height:'92vh',overflow:'scroll'}}>
                    <a class="twitter-timeline" href="https://twitter.com/tedmem?ref_src=twsrc%5Etfw">Tweets by tedmem</a>
                    <Helmet>
                         <script  src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
                    </Helmet>
                </div>
            </div>
        </>
    );
};

export default CategoryOne;
