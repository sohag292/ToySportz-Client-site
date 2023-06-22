import React from 'react'
import img1 from '../../../assets/img1.png'
import './Banner.css'
import Aos from 'aos';
import "aos/dist/aos.css";
import { useEffect } from 'react';

export default function Banner() {
    useEffect(() => {
        Aos.init({ duration: 2000 });
      }, []);
    return (
        <section className="container ">
            <div  className="row flex-column-reverse flex-md-row mb-5 ">
                <div data-aos="fade-top" className="col-md-6 d-flex align-items-center order-md-1">
                    <div>
                        <h1 className='w-75 header-text'>Find your best Toys for your Children<span className='text-success'>.</span></h1>
                        <p className='header-desc'>Discover our extensive collection of toys that cater to various interests and age groups. From educational toys to outdoor games, we have something for everyone. Browse through our categories and find the perfect toy for your child.</p>
                        <a href="#" className="btn btn-success btn-lg">Clike me</a>
                    </div>
                </div>
                <div data-aos="fade-up-left" className="col-md-6 order-md-2">
                    <img src={img1} alt="Image" className="img-fluid" />
                </div>
            </div>
        </section>
    )
}
