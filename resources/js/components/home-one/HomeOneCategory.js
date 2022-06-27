import React from "react";
import CategoryOne from "../category/CategoryOne";
import SectionTitle from "../../components/sectionTitle/SectionTitle";

const HomeOneCategory = ({ data }) => {
    return (
        <div className="home-one-cat edu-service-area service-wrapper-1 edu-section-gap bg-image">
            <div className="container eduvibe-animated-shape">
                <div className="row mb-4">
                    <div className="col-lg-12">
                        <SectionTitle
                            classes="text-center"
                            slogan="Bülten"
                            title="Son Bültenler"
                        />
                    </div>
                </div>

                <CategoryOne data={data} />
                <div className="text-center mt-5">
                <a
                    className="edu-btn "
                    href='/bulten'
                >
                    Bültenlerimiz{" "}
                    <i className="icon-arrow-right-line-right"></i>
                </a>
                </div>


                <div className="shape-dot-wrapper shape-wrapper d-xl-block d-none">
                    <div className="shape-image shape-image-1">
                        <img
                            src="/images/shapes/shape-03-01.png"
                            alt="Shape Thumb"
                        />
                    </div>
                    <div className="shape-image shape-image-2">
                        <img
                            src="/images/shapes/shape-08.png"
                            alt="Shape Thumb"
                        />
                    </div>
                    <div className="shape-image shape-image-3">
                        <img
                            src="/images/shapes/shape-04-01.png"
                            alt="Shape Thumb"
                        />
                    </div>
                    <div className="shape-image shape-image-4">
                        <img
                            src="/images/shapes/shape-03-02.png"
                            alt="Shape Thumb"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeOneCategory;
