import React from "react";
import { Link, useParams } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa";


const CourseTwo = ({ classes, item }) => {

  return (
    <>

          <div className="col-md-4 col-sm-12">
            <div
              className={`edu-card card-type-2 radius-small ${
                classes ? classes : ""
              }`}
            >
              <div className="inner">
                <div className="thumbnail">
                  <Link to={`/yazilar-detay/${item.slug}`}>
                    <img
                      className="w-100"
                      style={{ height: "30vh" }}
                      src={item.image}
                      alt="Course Thumb"
                    />
                  </Link>
                </div>
                <div className="details">
                    <div className="center" style={{backgroundColor:'antiquewhite'}}>
                        <h6>Hakkında</h6>
                        <p className="text-break">{item.excrept}</p>
                        <Link to={`/yazilar-detay/${item.slug}`}>
                            <span>
                            Devamını oku <FaAngleRight />
                            </span>
                        </Link>
                    </div>
                </div>
                <div className="content">
                  <h6 className="title">{<Link to={`/yazilar-detay/${item.slug}`}>{item.title}</Link>}</h6>
                </div>
              </div>
            </div>
          </div>

    </>
  );
};
export default CourseTwo;
