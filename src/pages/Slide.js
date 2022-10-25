import React, { Fragment } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img2 from "../image/img2.png";
import img4 from "../image/img4.png";
import "../Style/slide.css";

const Slide = () =>{
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1
    };
    return(
        <Fragment>
            <div className='slider-head'>
                <h2 className='slider-heading'>Build the Player Roster of Your Dreams</h2>
                <p className='slider-description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
            </div>
            <div className='ss'>
            <Slider {...settings}>
               
                <div className='slide'>
                    <img src={img4} />
                </div>
                <div className='slide'>
                    <img src={img2} />
                </div>
                <div className='slide'>
                <img src={img2} />
                </div>
                <div className='slide'>
                <img src={img4} />
                </div>
                <div className='slide'>
                <img src={img2} />
                </div>
                <div className='slide'>
                <img src={img2} />
                </div>
                <div className='slide'>
                <img src={img2} />
                </div>
              
            </Slider>
            </div>
        </Fragment>
    )
}
export default Slide;