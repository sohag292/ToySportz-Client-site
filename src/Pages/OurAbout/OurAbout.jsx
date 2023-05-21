import React from 'react'
import imag1 from '../../assets/image/about.png'
import imag2 from '../../assets/image/about2.png'
export default function OurAbout() {
    return (
        <div>
            <div>
                <div className=" py-5 bg-light">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <img src={imag1} className="w-75 d-block mx-auto rounded shadow-lg" alt="" />
                            </div>
                            <div className="col-lg-6 d-flex flex-column justify-content-center">
                                <h1 className="text-warning fw-bold display-5 py-4">About Us</h1>
                                <h5 className="text-primary fw-bold ">ToySportz is a popular baby toy shop that offers </h5>
                                <p className="">We prioritize safety and only offer toys that meet the highest quality standards. All our products are carefully curated to ensure they are free from any harmful materials and meet the necessary safety regulations.In addition to our extensive toy collection, we also provide personalized customer service. </p>
                                <p className="pb-4">Our knowledgeable staff is always ready to assist parents in finding the perfect toy for their little ones. We believe in creating a joyful and memorable shopping experience for both children and parents.</p>
                                <button className="btn btn-success fw-bolder fs-5">Get More Info</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
