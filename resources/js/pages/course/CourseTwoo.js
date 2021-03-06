import React, { useEffect } from 'react';
import SEO from '../../common/SEO';
import Layout from '../../common/Layout';
import BreadcrumbOne from '../../common/breadcrumb/BreadcrumbOne';
import axiosClient from '../../utils/axiosClient';
import { useParams } from 'react-router-dom';

const CoruseTwoo = () => {
    const { slug } = useParams();
    const [content, setContent] = React.useState(null);
    const formattedDate = new Date(content?.created_at);

    const getWrites = async () => {
        await axiosClient
            .get(`/api/yazilar-detay/${slug}`)
            .then((res) => setContent(res.data));
    };

    useEffect(() => {
        getWrites();
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
                    <div dangerouslySetInnerHTML={{ __html: content?.content }}></div>
                  </div>
                </div>
                <div className="col-lg-5">
                  <div className="eduvibe-sidebar">
                    <div className="event-widget event-widget-details mt--40 mb-3 ">
                      <div className="widget-content">
                        <div className="google-map">
                          <img
                            src={content?.image}
                            alt="Event Thumb"
                            style={{ marginTop:'20%' }}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="eduvibe-widget eduvibe-widget-details">
                      <h5 className="title">Yazı Detayı</h5>
                      <div className="widget-content">
                        <ul>
                          {content?.created_at && (
                            <li>
                              <span>
                                <i className="icon-calendar-2-line"></i> Tarih
                              </span>
                              <span>{formattedDate.toLocaleDateString("en-US")}</span>
                            </li>
                          )}
                          {content?.category?.name && (
                            <li>
                              <span>
                                <i className="icon-calendar-2-line"></i> Kategori
                              </span>
                              <span>{content?.category?.name.charAt(0).toUpperCase() + content?.category?.name.slice(1)}</span>
                            </li>
                          )}

                        </ul>
                      </div>
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

export default CoruseTwoo;
