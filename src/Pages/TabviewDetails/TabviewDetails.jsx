import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from 'sweetalert2'
import Aos from 'aos';
import "aos/dist/aos.css";
import { useEffect } from 'react';

const TabviewDetails = ({ allCategory, subCategory, altText }) => {
    const {user} = useContext(AuthContext)
    useEffect(() => {
        Aos.init({ duration: 2000 });
      }, []);
    const handleClick = () => {
        if (user) {

        } else {
            Swal.fire({
                position: 'top-center',
                icon: 'error',
                title: 'Please Login !!',
                showConfirmButton: false,
                timer: 1500
            })

        }
    };
    return (
        <div data-aos="fade-left"
        data-aos-anchor="#example-anchor"
        data-aos-offset="500"
        data-aos-duration="500" className="row row-cols-1 row-cols-sm-4 row-cols-md-4 justify-content-center mx-auto mt-5 mb-5 gap-4">
            {allCategory
                .filter((category) => category.subCategory === subCategory)
                .map((item) => (
                    <div key={item._id} className="">
                        <div className="card bg-light h-100 shadow">
                            <img
                                src={item.pictureUrl}
                                className="card-img-top w-75 mx-auto d-flex p-2"
                                alt={altText}
                            />
                            <div className="card-body">
                                <h3 className="card-title">Name: {item.name}</h3>
                                <p>Price: {item.price}</p>
                                <p>Rating: {item.rating}</p>
                                <div className="card-actions justify-content-end">
                                    <Link to={`/TabviewDetailsallinfo/${item._id}`}><button onClick={handleClick}  className="btn btn-primary">View details</button></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
        </div>
    );
};

export default TabviewDetails;
