import React from "react";
import { Link, useParams } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa";


const BultenCourse = ({ classes, data }) => {

  return (
    <>
      {data?.map((item) => {
        return (
          <div className="col-md-4 col-sm-12">
            <div
              className={`edu-card card-type-2 radius-small ${
                classes ? classes : ""
              }`}
            >
              <div className="inner">
                <div className="thumbnail">
                    <img
                      className="w-100"
                      style={{ height: "60vh" }}
                      src={item.image}
                      alt="Course Thumb"
                    />
                </div>
                <div className="content text-center">
                     <span className="course-total" style={{color:'#525fe1'}}>
                        {new Date(item?.date).toLocaleDateString()}
                    </span>
                  <h6 className="title">{<Link to={`/yazilar-detay/${item.slug}`}>{item.title}</Link>}</h6>
                  <a
                        className="edu-btn"
                        href={item?.pdf_link[0]}
                        target='_blank'
                    >
                        Devamını Oku{" "}
                        <i className="icon-arrow-right-line-right"></i>
                    </a>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};
export default BultenCourse;
