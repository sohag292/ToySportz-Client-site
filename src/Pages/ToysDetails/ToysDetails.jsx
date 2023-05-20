import React from 'react';
import { useLoaderData } from 'react-router';

export default function ToysDetails() {
    const toy = useLoaderData();
    const { pictureUrl, name, sellerName, sellerEmail, price, rating, quantity, description } = toy;
    return (
<div className="container my-5">
  <div className="card d-flex flex-md-row border p-4">
    <img className=" w-25" src={pictureUrl} alt="" />
    <div className="card-body mx-5">
      <h3 className="card-title fw-bolder">Toy name: {name}</h3>
      <p className="card-text"><span className="fw-bolder">Seller Name:</span> {sellerName}</p>
      <p className="card-text"><span className="fw-bolder">Seller Email:</span> {sellerEmail}</p>
      <p className="card-text"><span className="fw-bolder">Price:</span> {price}</p>
      <p className="card-text"><span className="fw-bolder">Rating:</span> {rating}</p>
      <p className="card-text"><span className="fw-bolder">Quantity:</span> {quantity}</p>
      <p className="card-text"><span className="fw-bolder">Description:</span> {description}</p>
    </div>
  </div>
</div>

    );
}
