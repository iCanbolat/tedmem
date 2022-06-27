import React from "react";
import { MdArticle } from "react-icons/md";
import { AiOutlineDoubleRight } from "react-icons/ai";
import { MdOutlinePublic } from "react-icons/md";
import { MdOutlineEventNote } from "react-icons/md";
import "../../assets/css/style.css";
import Imagee from "../../assets/images/bg/banner.jpg"
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";
import "react-awesome-slider/dist/custom-animations/fall-animation.css";
import { Link, useNavigate } from "react-router-dom";

const BannerOne = ({ data }) => {
    const [writesResults, setWritesResults] = React.useState([])
    const [query, setQuery] = React.useState('')


    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleQuery()
          }
    }

    const handleQuery = (e) => {

        var writesResults = data?.filter((data) =>  data.title.toLowerCase().match(query))

        setWritesResults(writesResults)

        if ( e === '' ){
            setWritesResults([])
        }
     }
     const history = useNavigate();

    return (
        <div className="height-940">
            <div className="row align-items-center">
                <div
                    style={{
                        backgroundImage: `url(${Imagee})`,
                        height: 770,
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                    }}
                >
                    <div style={{width:'100%',height:'100%', backgroundColor:'rgb(0 0 0 / 62%)', position:'relative'}}>
                        <div className="container h-100">
                            <div className="row h-100 text-center align-items-center">
                                <div className="row d-flex justify-content-center">
                                    <div className="col-md-6 " >
                                        <input className="bg-white mb-2" onKeyDown={handleKeyDown} onChange={e => {setQuery(e.target.value); handleQuery(e.target.value) }} type="text"  placeholder="Yazılarda Arayın..." />
                                        {writesResults?.length > 0 && (
                                            writesResults.slice(0,4).map(item => (
                                                <Link to={item.category_id ? `/yazilar-detay/${item.slug}` : `/event-details/${item.slug}` }>
                                                     <div className="border mb-2" style={{borderRadius:'60px', backgroundColor:'antiquewhite'}}>{item.title}</div>
                                                </Link>
                                            ))
                                        )}
                                    </div>
                                </div>
                                <div className="col-md-4 ">
                                    <div class="card mx-auto" style={{width:'60%', borderRadius:'40px'}}>
                                        <Link to='/yazilar/degerlendirme'>
                                            <MdArticle className="card-img-top" style={{fontSize:'100px', color:'orange'}} />
                                            <div class="card-body">
                                                <h5>Yazılar</h5>
                                                <h6>Değerlendirme <AiOutlineDoubleRight/></h6>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                  <div class="card mx-auto" style={{width:'60%', borderRadius:'40px'}}>
                                  <Link to='/yazilar/soylesi'>
                                        <MdArticle className="card-img-top" style={{fontSize:'100px', color:'orange'}} />
                                        <div class="card-body">
                                            <h5>Yazılar</h5>
                                            <h6>Söyleşi <AiOutlineDoubleRight/></h6>
                                        </div>
                                    </Link>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                 <div class="card mx-auto" style={{width:'60%', borderRadius:'40px'}}>
                                     <Link to='/yazilar/yansima'>
                                        <MdArticle className="card-img-top" style={{fontSize:'100px', color:'orange'}} />
                                        <div class="card-body">
                                            <h5>Yazılar</h5>
                                            <h6>Yansıma <AiOutlineDoubleRight/></h6>
                                        </div>
                                    </Link>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div class="card mx-auto" style={{width:'60%', borderRadius:'40px'}}>
                                    <Link to='/yazilar/gorus'>
                                        <MdArticle className="card-img-top" style={{fontSize:'100px', color:'orange'}} />
                                        <div class="card-body">
                                            <h5>Yazılar</h5>
                                            <h6>Görüş <AiOutlineDoubleRight/></h6>
                                        </div>
                                    </Link>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div class="card mx-auto" style={{width:'60%', borderRadius:'40px'}}>
                                    <Link to='/yayinlar'>
                                        <MdOutlinePublic className="card-img-top" style={{fontSize:'100px', color:'orange'}} />
                                        <div class="card-body">
                                            <h5>Yayınlar</h5>
                                            <h6>Tüm Yayınlar <AiOutlineDoubleRight/></h6>
                                        </div>
                                    </Link>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div class="card mx-auto" style={{width:'60%', borderRadius:'40px'}}>
                                    <Link to='/etkinlikler'>
                                        <MdOutlineEventNote className="card-img-top" style={{fontSize:'100px', color:'orange'}} />
                                        <div class="card-body">
                                            <h5>Etkinlikler</h5>
                                            <h6>Tüm Etkinlikler <AiOutlineDoubleRight/></h6>
                                        </div>
                                    </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default BannerOne;
