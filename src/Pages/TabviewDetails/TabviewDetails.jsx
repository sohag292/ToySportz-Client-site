import React from "react";
import { Link } from "react-router-dom";

const TabviewDetails = ({ allCategory, subCategory, altText }) => {
    return (
        <div className="row row-cols-1 row-cols-md-3 mx-auto mt-5 mb-5 gap-4">
            {allCategory
                .filter((category) => category.subCategory === subCategory)
                .map((item) => (
                    <div key={item._id} className="col">
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
                                    <Link to={`/TabviewDetailsallinfo/${item._id}`}><button  className="btn btn-primary">View details</button></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
        </div>
    );
};

export default TabviewDetails;
