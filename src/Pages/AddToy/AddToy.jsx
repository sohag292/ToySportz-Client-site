import React from 'react'
import './AddToy.css'
import Swal from 'sweetalert2'
import ToySportTitle from '../../TitleHooks/ToySportTitle'
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { useState } from 'react';
export default function AddToy() {
  ToySportTitle('AddToy')
  const { user } = useContext(AuthContext);
  const handleAddToy = event => {
    event.preventDefault();
    const form = event.target;
    const pictureUrl = form.pictureUrl.value;
    const name = form.name.value;
    const sellerName = form.sellerName.value;
    const sellerEmail = form.sellerEmail.value;
    const subCategory = form.subCategory.value;
    const price = parseFloat(form.price.value);
    const rating = form.rating.value;
    const quantity = form.quantity.value;
    const description = form.description.value;

    const newToy = { pictureUrl, name, sellerName, sellerEmail, subCategory, price, rating, quantity, description };

    //send data to the server
    fetch('https://toy-sportz-server-site-sohag292.vercel.app/addToy', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(newToy)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if (data.insertedId) {
          Swal.fire({
            title: 'success!',
            text: 'ToySportz Added successfully',
            icon: 'success',
            confirmButtonText: 'okay'
          })
        }
        form.reset()
      })

  }

  const bookCategories = ["Basketball", "Cricket toys", "Soccer toys"];

  const [selectedToyCategory, setSelectedToyCategory] = useState(
    bookCategories[0]
  );

  const handleChangeSelectedValue = (event) => {
    setSelectedToyCategory(event.target.value);
  };
  return (
    <div>
      <div className="container my-5">
        <h2 className="text-center">Add a Toy</h2>
        <form onSubmit={handleAddToy}>
          <div className="row g-3">
            <div className="col-md-6">
              <label htmlFor="pictureUrl" className="form-label">
                Picture URL
              </label>
              <input
                type="text"
                name="pictureUrl"
                className="form-control"
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="name" className="form-label">
               Toy Name
              </label>
              <input
                type="text"
                name="name"
                className="form-control"
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="sellerName" className="form-label">
                Seller Name
              </label>
              <input
                type="text"
                name="sellerName"
                defaultValue={user?.displayName}
                className="form-control"
                readOnly
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="sellerEmail" className="form-label">
                Seller Email
              </label>
              <input
                type="text"
                name="sellerEmail"
                defaultValue={user?.email}
                className="form-control"
                readOnly
              />
            </div>
            <div className="col-md-6">

              <label className="label">
                <span className="label-text">Sub Category</span>
              </label>
              <select
                id="inputState"
                name="subCategory"
                className="form-select p-3 rounded-lg "
                value={selectedToyCategory}
                onChange={handleChangeSelectedValue}
              >
                {bookCategories.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>

            </div>
            <div className="col-md-6">
              <label htmlFor="price" className="form-label">
                Price
              </label>
              <input
                type="number"
                name="price"
                className="form-control"
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="rating" className="form-label">
                Rating
              </label>
              <input
                type="text"
                name="rating"
                className="form-control"
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="quantity" className="form-label">
                Available Quantity
              </label>
              <input
                type="text"
                name="quantity"
                className="form-control"
              />
            </div>
            <div className="col-12">
              <label htmlFor="description" className="form-label">
                Detail Description
              </label>
              <textarea
                name="description"
                className="form-control"
                rows="5"
              ></textarea>
            </div>
          </div>
          <div className="d-grid gap-2 mt-4">
            <button className="btn btn-primary btn-lg" type="submit">
              Add Toy
            </button>
          </div>
        </form>

      </div>
    </div>
  )
}
