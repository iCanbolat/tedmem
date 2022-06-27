import React from "react";
import { BsTwitter } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";

const HeaderTop = () => {
    return (
        <>
            <div
                className="row align-items-center"
                style={{ backgroundColor: "antiquewhite" }}
            >
                <div className="container">
                    <div className="d-flex justify-content-sm-center justify-content-md-start pb-1">
                        <a href="https://twitter.com/tedmem" className="mr-4" target="_blank">
                            <BsTwitter />
                        </a>
                        <a href="https://www.facebook.com/tedmem" className="mr-4" target="_blank">
                            <BsFacebook />
                        </a>
                        <a href="https://www.linkedin.com/company/tedmem1/" className="mr-4" target="_blank">
                            <BsLinkedin />
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HeaderTop;
