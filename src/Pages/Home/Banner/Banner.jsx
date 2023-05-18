import React from 'react'
import img1 from '../../../assets/img1.png'
import './Banner.css'
export default function Banner() {
    return (
        <section className="container">
            <div className="row flex-column-reverse flex-md-row">
                <div className="col-md-6 d-flex align-items-center order-md-1">
                    <div>
                        <h1 className='w-75 header-text'>Find your best Toys for your Children<span className='text-success'>.</span></h1>
                        <p className='header-desc'>Discover our extensive collection of toys that cater to various interests and age groups. From educational toys to outdoor games, we have something for everyone. Browse through our categories and find the perfect toy for your child.</p>
                        <a href="#" class="btn btn-success btn-lg">Clike me</a>
                    </div>
                </div>
                <div className="col-md-6 order-md-2">
                    <img src={img1} alt="Image" className="img-fluid" />
                </div>
            </div>
        </section>
    )
}
