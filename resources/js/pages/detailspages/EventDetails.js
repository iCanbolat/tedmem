import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { FaFilePdf } from "react-icons/fa";
import SEO from "../../common/SEO";
import Layout from "../../common/Layout";
import BreadcrumbOne from "../../common/breadcrumb/BreadcrumbOne";
import axiosClient from "../../utils/axiosClient";

const EventDetails = () => {
    const { slug } = useParams();
    const [content, setContent] = React.useState(null);

    const getDetails = async () => {
        await axiosClient
            .get(`/api/public-details/${slug}`)
            .then((res) => setContent(res.data));
    };

    useEffect(() => {
        getDetails();
    }, []);

    return (
        <>
            <SEO title={content?.title} />
            <Layout>
                <BreadcrumbOne
                    title={content?.title}
                    rootUrl="/"
                    parentUrl="Anasayfa"
                    currentUrl="Yayın Detay"
                />
                <div className="edu-event-details-area edu-event-details edu-section-gap bg-color-white">
                    <div className="container">
                        <div className="row g-5">
                            <div className="col-lg-7">
                                <div className="content">
                                    <h3 className="title">{content?.title}</h3>

                                    <div
                                        style={{
                                            backgroundColor: "transparent",
                                        }}
                                        dangerouslySetInnerHTML={{
                                            __html: content?.content,
                                        }}
                                    ></div>

                                    <div className="row border border-warning rounded py-3 px-2">
                                        <div className="col-md-4 ">
                                            <img style={{height:'100%', width:'100%'}} src={content?.image}></img>
                                        </div>
                                        <div className="col-md-8">
                                            <h6>{content?.title}</h6>
                                            <div
                                                style={{
                                                    height: "71%",
                                                }}
                                                dangerouslySetInnerHTML={{
                                                    __html: content?.about
                                                }}
                                            ></div>
                                            {content?.pdf_link[0] && (
                                                <a href={content?.pdf_link[0]}
                                                    target='_blank'>
                                                    <div className="d-flex">
                                                    <FaFilePdf style={{fontSize:'25px', color:'red'}}/> PDF
                                                    </div>
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-5">
                                <div className="eduvibe-sidebar">
                                    <div className="event-widget event-widget-details mt--40  ">
                                        <div className="widget-content">
                                            <div className="google-map">
                                                <img
                                                    src={content?.image}
                                                    alt="Event Thumb"
                                                    style={{ marginTop: "20%", width:'100%'}}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="eduvibe-widget eduvibe-widget-details mt--10">
                                        <h5 className="title">Yayın Detayı</h5>
                                        <div className="widget-content">
                                            <ul>
                                                {content?.publish_year && (
                                                    <li>
                                                        <span>
                                                            <i className="icon-calendar-2-line"></i>{" "}
                                                            Basım Yılı
                                                        </span>
                                                        <span>
                                                            {
                                                                content?.publish_year
                                                            }
                                                        </span>
                                                    </li>
                                                )}
                                                {content?.publisher && (
                                                    <li>
                                                        <span>
                                                            <i className="icon-user-line"></i>{" "}
                                                            Yazar
                                                        </span>
                                                        <span>
                                                            {content.publisher}
                                                        </span>
                                                    </li>
                                                )}
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="eduvibe-widget eduvibe-widget-details mt--10">
                                        <h5>Önerilen Atıf</h5>
                                        {content?.attribution && (
                                            <div
                                            dangerouslySetInnerHTML={{
                                                __html: content?.attribution
                                            }}
                                        ></div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    );
};
export default EventDetails;
