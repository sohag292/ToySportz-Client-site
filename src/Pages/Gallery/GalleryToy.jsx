import React from 'react'
import './Gallery.css'
import ReactDOM from "react-dom";
import Carousel from "react-elastic-carousel";
import image1 from '../../assets/image/slam_dunk_mini_basketBall.png'
import image2 from '../../assets/image/kicker_ball_swerve.png'
import image3 from '../../assets/image/baby_badmainton.png'
import image4 from '../../assets/image/baseball.png'
import image5 from '../../assets/image/vollyball-removebg-preview.png'
import image6 from '../../assets/image/golf.png'
import Aos from 'aos';
import "aos/dist/aos.css";
import { useEffect } from 'react';
const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
];
export default function GalleryToy() {
    useEffect(() => {
        Aos.init({ duration: 2000 });
      }, []);
    return (
        <div className='mx-4 my-5'>
            <h1 className='text-center fw-bolder mb-5'>Toy<span className='text-success'>S</span>portz Gallery</h1>
            <div className="gallery">
                <Carousel breakPoints={breakPoints}>
                    <div className='item' data-aos="flip-up"><img className='w-75' src={image1} alt="" /></div>
                    <div className='item' data-aos="flip-down"><img className='w-75' src={image2} alt="" /></div>
                    <div className='item'data-aos="zoom-out-up"><img className='w-75' src={image3} alt="" /></div>
                    <div className='item'data-aos="flip-left" data-aos-easing="ease-out-cubic"data-aos-duration="2000"><img className='w-75' src={image4} alt="" /></div>
                    <div className='item' data-aos="flip-up"><img className='w-75' src={image5} alt="" /></div>
                    <div className='item' data-aos="flip-up"><img className='w-75' src={image6} alt="" /></div>
                </Carousel>
            </div>
        </div>
    )
}
